import styled, { css } from "styled-components";

interface BookCoverUploadProps {
  hasImage: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* padding: 5rem 8rem; */

  /* background-color: blue; */
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: #1f1f1f;
  text-align: center;
  margin-bottom: 3rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 3rem;
  /* background-color: white; */
  /* border-radius: 1rem; */
`;

export const FormSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
  font-size: 1rem;
  outline: none;
  box-shadow: #7bb286 0px 0px 7px 0px;

  &::placeholder {
    color: #5d8665;
  }

  &:focus {
    box-shadow: #7bb286 0px 0px 10px 1px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
  font-size: 1rem;
  color: #5d8665;
  box-shadow: #7bb286 0px 0px 7px 0px;

  &:focus {
    box-shadow: #7bb286 0px 0px 10px 1px;
  }
`;

export const DateContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
  outline: none;
  font-size: 1rem;
  resize: vertical;
  box-shadow: #7bb286 0px 0px 7px 0px;

  &::placeholder {
    color: #5d8665;
  }

  &:focus {
    border: none;
    box-shadow: #7bb286 0px 0px 10px 1px;
  }
`;

export const DateInput = styled(Input).attrs({ type: "date" })`
  max-width: 100%;
  color: #5d8665;
`;

export const PagesInput = styled(Input)`
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  margin-top: 1rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    color: #333;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
    accent-color: #bdd9c3;
    cursor: pointer;
  }
`;

export const LeftContainer = styled.div``;

export const BookCoverUpload = styled.div<BookCoverUploadProps>`
  width: 17rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  ${(props) =>
    !props.hasImage &&
    css`
      box-shadow: #7bb286 0px 0px 7px 0px;
      padding: 0.5rem;
      background-color: white;
    `}
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  align-items: center;
`;

export const SaveButton = styled.button`
  width: fit-content;
  padding: 0.8rem 1.5rem;
  background-color: #7bb286;
  color: #fffdf0;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: 0.3s;

  &:hover {
    background-color: #5e9b73;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: #a3bfa9;
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
