// hooks/useBookForm.ts
import { useState } from "react";
import { BookFormValues, createBookPayload } from "../../types/BookForm";
import { saveBook } from "../../services/bookService";

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

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const payload = createBookPayload(form);
      await saveBook(payload);
      alert("Book saved successfully!");
    } catch (error) {
      alert("Error saving book.");
      console.error(error);
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
    handleChange,
    handleCheckbox,
    handleRating,
    handleCoverUpload,
    handleSubmit,
    toggleFavorite,
  };
};
