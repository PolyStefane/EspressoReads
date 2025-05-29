import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: #f2c94c;
  cursor: pointer;

  span {
    margin-right: 0.4rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FavoriteButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  margin-left: 0.5rem;

  width: 2.4rem;
  height: 2.8rem;
  display: flex;
  align-items: start;
  justify-content: center;

  color: ${(props) => (props.$active ? "#ff69b4" : "#dcdcdc")};

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const HeartIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: #e18eeb;
`;

export const HeartIconOutline = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: rgb(228, 183, 233);
`;
