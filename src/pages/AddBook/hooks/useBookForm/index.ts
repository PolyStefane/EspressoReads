// External Libraries
import { useState } from "react";

// Types
import { BookFormValues, createBookPayload } from "../../types/BookForm";

// Services
import { saveBook } from "../../services/bookService";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useBookForm = () => {
  const [form, setForm] = useState<BookFormValues>({
    ownerId: localStorage.getItem("userId") || "",
    title: "",
    author: "",
    genre: "",
    startDate: "",
    endDate: "",
    review: "",
    favoriteCharacter: "",
    rating: 0,
    coverUrl: "",
    numberPages: "",
    readingStatus: "",
    isFavorite: false,
    physical: false,
    digital: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRating = (stars: number) => {
    setForm((prev) => ({ ...prev, rating: stars }));
  };

  const handleCoverUpload = () => {
    const url = prompt("Paste the URL of the book cover:");
    if (url) {
      setForm((prev) => ({ ...prev, coverUrl: url }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const payload = createBookPayload(form);
      await saveBook(payload);

      toast.success("Book saved successfully!");
      navigate("/library");
    } catch (error: any) {
      if (error?.status === 409) {
        toast.error(error.detail || "Already exists a book with this title.");
      } else {
        toast.error("Failed to save book. Please try again.");
      }
      console.error("Erro ao salvar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFavorite = () => {
    setForm((prev) => ({ ...prev, isFavorite: !prev.isFavorite }));
  };

  return {
    form,
    isSubmitting,
    setForm,
    handleChange,
    handleCheckbox,
    handleRating,
    handleCoverUpload,
    handleSubmit,
    toggleFavorite,
  };
};
