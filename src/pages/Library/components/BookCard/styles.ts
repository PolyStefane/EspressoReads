import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 0.6rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover .overlay {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(20, 20, 20, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

export const ActionButton = styled.button`
  background-color: #e9f1e8;
  width: 5rem;
  border: none;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
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
