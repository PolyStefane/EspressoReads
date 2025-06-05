import React from "react";
import { TagButton } from "./styles";
import { FavoriteTagSVG } from "../../assets/icons/FavoriteTag";
import { FinishedTagSVG } from "../../assets/icons/FinishedTag";
import { ReadingTagSVG } from "../../assets/icons/ReadingTag";
import { WishlistTagSVG } from "../../assets/icons/WishlistTag";

export type FilterType = "FAVORITES" | "FINISHED" | "READING" | "WISHLIST";

interface Props {
  type: FilterType;
  active: boolean;
  onClick: (type: FilterType) => void;
}

const icons = {
  FAVORITES: FavoriteTagSVG,
  FINISHED: FinishedTagSVG,
  READING: ReadingTagSVG,
  WISHLIST: WishlistTagSVG,
};

const labels = {
  FAVORITES: "Favorites",
  FINISHED: "Finished",
  READING: "Reading",
  WISHLIST: "Wishlist",
};

export const FilterTag: React.FC<Props> = ({ type, active, onClick }) => {
  const Icon = icons[type];

  return (
    <TagButton $active={active} $type={type} onClick={() => onClick(type)}>
      <Icon />
      {labels[type]}
    </TagButton>
  );
};
