import React from "react";

// Assets
import { FavoriteTagSVG } from "../../../../assets/icons/FavoriteTag";
import { FinishedTagSVG } from "../../../../assets/icons/FinishedTag";
import { ReadingTagSVG } from "../../../../assets/icons/ReadingTag";
import { WishlistTagSVG } from "../../../../assets/icons/WishlistTag";
import { FilterType } from "../../../../components/Tag";
import { TagDisplay } from "./styles";

const icons = {
  FAVORITES: <FavoriteTagSVG />,
  FINISHED: <FinishedTagSVG />,
  READING: <ReadingTagSVG />,
  WISHLIST: <WishlistTagSVG />,
};

const labels = {
  FAVORITES: "Favorites",
  FINISHED: "Finished",
  READING: "Reading",
  WISHLIST: "Wishlist",
};

interface Props {
  type: FilterType;
}

export const StatusTag: React.FC<Props> = ({ type }) => {
  return (
    <TagDisplay $type={type}>
      {icons[type]} {labels[type]}
    </TagDisplay>
  );
};
