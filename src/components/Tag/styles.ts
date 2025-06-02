import styled from "styled-components";

const activeColors = {
  FAVORITES: "#D86CD2",
  FINISHED: "#51A349",
  READING: "#E9B544",
  WISHLIST: "#5A7BD4",
};

const backgroundColors = {
  FAVORITES: "#FDE9FF",
  FINISHED: "#DDF6D0",
  READING: "#FFF6D0",
  WISHLIST: "#D8DAF8",
};

type TagProps = {
  $active: boolean;
  $type: keyof typeof backgroundColors;
};

export const TagButton = styled.button<TagProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.2s ease;
  border: 2px solid transparent;
  background-color: ${({ $active, $type }) =>
    $active ? backgroundColors[$type] : backgroundColors[$type]};
  color: ${({ $active, $type }) => ($active ? activeColors[$type] : "#333")};

  border-color: ${({ $active, $type }) =>
    $active ? activeColors[$type] : "transparent"};

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${({ $active, $type }) => ($active ? activeColors[$type] : "#666")};
    transition: fill 0.2s ease;
  }

  &:hover {
    opacity: 0.9;
  }
`;
