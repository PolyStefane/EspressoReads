import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Title = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Modal = styled.div`
  background-color: #fffefa;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 500px;
  max-width: 90%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: white;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: 2px solid #e6e6e6;
  resize: none;

  &:focus {
    border: 2px solid #bdd8bb;
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 1rem;
  background-color: white;
  border: 2px solid #e6e6e6;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  &:focus {
    border: 2px solid #bdd8bb;
    outline: none;
  }
`;

export const ReactionSection = styled.div`
  margin-top: 1.5rem;
`;

export const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 50px);
  gap: 1rem;
  margin-top: 1rem;

  justify-content: center;
`;

export const EmojiBox = styled.button<{ $selected: boolean }>`
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  border: 2px solid ${({ $selected }) => ($selected ? "#bdd8bb" : "#E6E6E6")};
  background-color: ${({ $selected }) => ($selected ? "#EFF6EE" : "#fff")};
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: #a6bda4;
    background-color: #eff6ee;
  }
`;

export const ModalActions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #7bb286;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: white;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #5e9b73;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background: #e0e0e0;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #d5d5d5;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
