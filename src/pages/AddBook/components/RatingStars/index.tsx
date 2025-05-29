// External libraries
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

// Styles
import {
  HeartIcon,
  StarContainer,
  FavoriteButton,
  RatingContainer,
  HeartIconOutline,
} from "./styles";

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
            {rating >= star ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </StarContainer>

      <FavoriteButton
        $active={isFavorite}
        onClick={onToggleFavorite}
        aria-label="Mark as favorite"
      >
        {isFavorite ? (
          <HeartIcon>
            <MdFavorite />
          </HeartIcon>
        ) : (
          <HeartIconOutline>
            <MdFavoriteBorder />
          </HeartIconOutline>
        )}
      </FavoriteButton>
    </RatingContainer>
  );
};
