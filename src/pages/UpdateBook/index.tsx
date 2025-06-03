// pages/EditBook/index.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components

// Services
import { fetchWithAuth } from "../../Services/api";

// Hook
import { useBookForm } from "../AddBook/hooks/useBookForm";
import { AddBookLayout } from "../AddBook/components/AddBookLayout";

export const UpdateBook: React.FC = () => {
  const { id: bookId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    form,
    setForm,
    isSubmitting,
    handleChange,
    // handleSubmit,
    handleRating,
    handleCheckbox,
    toggleFavorite,
    handleCoverUpload,
  } = useBookForm();

  useEffect(() => {
    if (!bookId) return;

    fetchWithAuth(
      `https://books-social.onrender.com/api/v1/book/find/${bookId}`
    )
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

  const handleUpdate = async () => {
    try {
      const res = await fetchWithAuth(
        `https://books-social.onrender.com/api/v1/book/update/${bookId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Erro ao atualizar o livro");

      navigate(`/books/${bookId}`);
    } catch (err) {
      console.error("Erro no update:", err);
    }
  };
  return (
    <AddBookLayout
      title="Edit Book"
      form={form}
      isSubmitting={isSubmitting}
      onChange={handleChange}
      onSubmit={handleUpdate}
      onRate={handleRating}
      onCheckboxChange={handleCheckbox}
      onFavoriteToggle={toggleFavorite}
      onCoverUpload={handleCoverUpload}
      isEdit
    />
  );
};
