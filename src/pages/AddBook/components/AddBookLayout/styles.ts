import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  text-align: center;
  font-weight: bold;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  input {
    width: 100%;
  }

  @media (min-width: 600px) {
    input {
      width: auto;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: vertical;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
`;

export const PagesInput = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const SaveButton = styled.button`
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4338ca;
  }

  &:disabled {
    background-color: #a5b4fc;
    cursor: not-allowed;
  }
`;
