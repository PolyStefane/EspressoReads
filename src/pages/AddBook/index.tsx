// External libraries
import React, { useEffect } from "react";

// Components
import { BookForm } from "./components/AddBookLayout";

// Hooks
import { useBookForm } from "./hooks/useBookForm";
import { useBookFormVisibility } from "./hooks/useBookFormVisibility";

export const AddBook: React.FC = () => {
  const {
    form,
    isSubmitting,
    handleChange,
    handleRating,
    handleSubmit,
    handleCheckbox,
    toggleFavorite,
    handleCoverUpload,
    setForm,
  } = useBookForm();

  const status = form.readingStatus?.toLowerCase();
  const {
    showReview,
    showRating,
    showEndDate,
    showStartDate,
    showFavoriteCharacter,
    showFormat,
  } = useBookFormVisibility(status);

  useEffect(() => {
    if (status === "reading") {
      setForm((prev) => ({
        ...prev,
        review: "",
        rating: null,
        isFavorite: false,
        endDate: "",
        favoriteCharacter: "",
      }));
    } else if (status === "wishlist") {
      setForm((prev) => ({
        ...prev,
        review: "",
        rating: null,
        isFavorite: false,
        endDate: "",
        favoriteCharacter: "",
        startDate: "",
        physical: false,
        digital: false,
      }));
    }
  }, [status]);

  return (
    <BookForm
      form={form}
      isSubmitting={isSubmitting}
      handleChange={handleChange}
      handleRating={handleRating}
      handleSubmit={handleSubmit}
      handleCheckbox={handleCheckbox}
      toggleFavorite={toggleFavorite}
      handleCoverUpload={handleCoverUpload}
      showReview={showReview}
      showRating={showRating}
      showEndDate={showEndDate}
      showStartDate={showStartDate}
      showFavoriteCharacter={showFavoriteCharacter}
      showFormat={showFormat}
      title="Add Book"
    />
  );
};
