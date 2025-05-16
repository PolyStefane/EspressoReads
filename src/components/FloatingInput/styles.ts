import styled from "styled-components";

export const FloatingInputWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const FloatingLabel = styled.label<{ active: boolean }>`
  position: absolute;
  left: 1rem;
  top: ${({ active }) => (active ? "0.4rem" : "1.2rem")};
  font-size: ${({ active }) => (active ? "0.75rem" : "1rem")};
  color: #6e9a77;
  pointer-events: none;
  transition: all 0.2s ease;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1.7rem 1rem 1rem 1rem;
  border: none;
  border-radius: 0.7rem;
  background-color: white;
  font-size: 1rem;
  color: #1f1f1f;
  box-shadow: #7bb286 0px 0px 7px 0px;
  outline: none;

  &:focus {
    box-shadow: #7bb286 0px 0px 10px 1px;
  }

  &::placeholder {
    color: #6e9a77;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:focus::placeholder {
    opacity: 1;
  }
`;
