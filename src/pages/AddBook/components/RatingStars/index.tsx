// pages/AddBook/components/RatingStars.tsx
import React from "react";
import { FavoriteButton, RatingContainer, StarContainer } from "../../styles";

type Props = {
  rating: number;
  isFavorite: boolean;
  onRate: (value: number) => void;
  onToggleFavorite: () => void;
};

export const RatingStars: React.FC<Props> = ({
  rating,
  isFavorite,
  onRate,
  onToggleFavorite,
}) => {
  return (
    <RatingContainer>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onClick={() => onRate(star)}>
            {rating >= star ? "★" : "☆"}
          </span>
        ))}
      </StarContainer>

      <FavoriteButton
        $active={isFavorite}
        onClick={onToggleFavorite}
        aria-label="Mark as favorite"
      >
        {isFavorite ? "🩷" : "🤍"}
      </FavoriteButton>
    </RatingContainer>
  );
};
