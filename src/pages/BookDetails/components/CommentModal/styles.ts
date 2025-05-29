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
  background-color: #fffdf7;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 500px;
  max-width: 90%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: none;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1rem;
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
  border: 2px solid ${({ $selected }) => ($selected ? "#e18eeb" : "#ccc")};
  background-color: ${({ $selected }) => ($selected ? "#fdeeff" : "#fff")};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: #e18eeb;
  }
`;

export const ModalActions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const SaveButton = styled.button`
  background-color: #7bb286;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 1rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #5e9b73;
  }
`;

export const CancelButton = styled.button`
  background-color: #ddd;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;
