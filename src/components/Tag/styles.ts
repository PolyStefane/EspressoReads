import styled from "styled-components";

import { FilterType } from ".";

import { activeBgColors, bgColors, borderColors } from "./colors";

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
