// pages/EditBook/index.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components

// Services
import { fetchWithAuth } from "../../Services/api";

// Hook
import { useBookForm } from "../AddBook/hooks/useBookForm";
import { BookForm } from "../AddBook/components/AddBookLayout";
import { useBookFormVisibility } from "../AddBook/hooks/useBookFormVisibility";
import { toast } from "sonner";

const apiUrl = import.meta.env.VITE_API_URL;

export const UpdateBook: React.FC = () => {
  const { id: bookId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    form,
    isSubmitting,
    setForm,
    handleChange,
    handleRating,
    handleCheckbox,
    toggleFavorite,
    handleCoverUpload,
  } = useBookForm();

  useEffect(() => {
    if (!bookId) return;

    fetchWithAuth(`${apiUrl}/api/v1/book/find/${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        const book = data.book;
        setForm({
          ...book,
          physical: book.bookTypes?.includes("PHYSICAL"),
          digital: book.bookTypes?.includes("DIGITAL"),
        });
      })
      .catch(console.error);
  }, [bookId]);

  useEffect(() => {
    const status = form.readingStatus?.toLowerCase();

    if (status === "reading") {
      setForm((prev) => ({
        ...prev,
        review: "",
        favoriteCharacter: "",
        rating: null,
        endDate: "",
      }));
    } else if (status === "wishlist") {
      setForm((prev) => ({
        ...prev,
        review: "",
        favoriteCharacter: "",
        rating: null,
        endDate: "",
        physical: false,
        digital: false,
      }));
    }
  }, [form.readingStatus, setForm]);

  const handleUpdate = async () => {
    try {
      const bookTypes = [];
      if (form.physical) bookTypes.push("PHYSICAL");
      if (form.digital) bookTypes.push("DIGITAL");

      const payload = {
        ...form,
        readingStatus: form.readingStatus?.toUpperCase(),
        bookTypes,
      };

      const res = await fetchWithAuth(
        `${apiUrl}/api/v1/book/update/${bookId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Erro ao atualizar o livro");

      toast.success("Book updated successfully!");
      navigate("/library");
    } catch (err) {
      console.error("Erro no update:", err);
    }
  };

  const {
    showReview,
    showRating,
    showEndDate,
    showStartDate,
    showFavoriteCharacter,
    showFormat,
  } = useBookFormVisibility(form.readingStatus);

  return (
    <BookForm
      title="Update Book"
      form={form}
      isSubmitting={isSubmitting}
      handleChange={handleChange}
      handleRating={handleRating}
      handleSubmit={handleUpdate}
      handleCheckbox={handleCheckbox}
      toggleFavorite={toggleFavorite}
      handleCoverUpload={handleCoverUpload}
      isEdit
      showReview={showReview}
      showRating={showRating}
      showEndDate={showEndDate}
      showStartDate={showStartDate}
      showFavoriteCharacter={showFavoriteCharacter}
      showFormat={showFormat}
    />
  );
};
