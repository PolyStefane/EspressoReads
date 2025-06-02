import styled from "styled-components";
import { FilterType } from "../../../../components/Tag";
import { bgColors, borderColors } from "../../../../components/Tag/colors";

export const TagDisplay = styled.div<{ $type: FilterType }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.4rem 1.2rem;
  border-radius: 9999px;
  background-color: ${({ $type }) => bgColors[$type]};
  color: #222;

  svg {
    fill: ${({ $type }) => borderColors[$type]};
  }
`;
