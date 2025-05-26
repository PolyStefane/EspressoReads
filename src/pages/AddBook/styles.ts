import styled, { css } from "styled-components";

interface FavoriteButtonProps {
  $active: boolean;
}

interface BookCoverUploadProps {
  hasImage: boolean;
}

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, #fffefa, #e6f1ea);
`;

export const Container = styled.div`
  flex: 1;

  padding: 5rem 18rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: #1f1f1f;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const FormSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
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
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 15rem;
  height: 20rem;
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

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const StarContainer = styled.div`
  display: flex;

  font-size: 2.5rem;
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

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#f28a8a" : "#dcdcdc")};

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SaveButton = styled.button`
  width: 30%;
  padding: 0.8rem;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
