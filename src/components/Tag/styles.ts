import styled from "styled-components";
import { FilterType } from ".";

const bgColors = {
  FAVORITES: "#FDE9FF",
  FINISHED: "#DDF6D0",
  READING: "#FFEFC3",
  WISHLIST: "#D7E0FE",
};

const activeBgColors = {
  FAVORITES: "#F4D1F8",
  FINISHED: "#C3F2AE",
  READING: "#FFE9AD",
  WISHLIST: "#B2C0F1",
};

const borderColors = {
  FAVORITES: "#BC52C8",
  FINISHED: "#54AA2C",
  READING: "#F6C336",
  WISHLIST: "#5070DC",
};

export const TagButton = styled.button<{
  $active: boolean;
  $type: FilterType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.4rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;

  background-color: ${({ $active, $type }) =>
    $active ? activeBgColors[$type] : bgColors[$type]};

  border-color: ${({ $active, $type }) =>
    $active ? borderColors[$type] : "transparent"};

  color: ${({ $active }) => ($active ? "#111" : "#222")};

  svg {
    fill: ${({ $type, $active }) => ($active ? borderColors[$type] : "#666")};
    transition: fill 0.2s ease;
  }

  &:hover {
    opacity: 0.95;
  }
`;
