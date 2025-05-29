import React from "react";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import {
  FavoriteButton,
  HeartIcon,
  HeartIconOutline,
  RatingContainer,
  StarContainer,
} from "./styles";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

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
