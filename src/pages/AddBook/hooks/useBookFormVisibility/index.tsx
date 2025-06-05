export function useBookFormVisibility(status?: string) {
  const normalized = status?.toLowerCase();
  return {
    showReview: !normalized || normalized === "finished",
    showRating: !normalized || normalized === "finished",
    showEndDate: !normalized || normalized === "finished",
    showStartDate: !normalized || normalized !== "wishlist",
    showFavoriteCharacter: !normalized || normalized === "finished",
    showFormat:
      !normalized || normalized === "reading" || normalized === "finished",
  };
}
