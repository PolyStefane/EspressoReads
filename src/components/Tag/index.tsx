import React from "react";
import { TagButton } from "./styles";

export type FilterType = "FAVORITES" | "FINISHED" | "READING" | "WISHLIST";

interface Props {
  label: string;
  type: FilterType;
  active: boolean;
  onClick: (type: FilterType) => void;
}

export const FilterTag: React.FC<Props> = ({
  label,
  type,
  active,
  onClick,
}) => {
  return (
    <TagButton $active={active} $type={type} onClick={() => onClick(type)}>
      {label}
    </TagButton>
  );
};
