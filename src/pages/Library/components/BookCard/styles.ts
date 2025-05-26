import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 0.6rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const BookInfo = styled.div`
  padding: 0.6rem;
`;

export const TitleText = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

export const AuthorText = styled.p`
  margin: 4px 0 0;
  color: #666;
  font-size: 0.9rem;
`;
