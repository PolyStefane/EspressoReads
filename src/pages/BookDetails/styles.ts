import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1f1f1f;
  text-align: center;
  margin-bottom: 3rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 3rem;
`;

export const FormSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* gap: 1.5rem; */
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled.div`
  margin-bottom: 1.5rem;
  align-items: center;

  span {
    font-size: 1.2rem;
    color: #444;
    line-height: 1.5;
  }
`;

export const Label = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.3rem;
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const CoverImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 230px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const IconGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Stars = styled.div`
  display: flex;
  font-size: 1.8rem;
  color: #f2c94c;

  svg {
    margin-right: 0.2rem;
  }
`;

export const HeartIcon = styled.div`
  font-size: 2rem;
  color: #e18eeb;
  margin-left: 0.6rem;
  display: flex;
  align-items: center;
`;

export const Tag = styled.span<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

export const Row = styled.div`
  margin-top: 2rem;
  display: flex;
  text-align: center;
  gap: 2rem;
`;

export const StatusRow = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    background-color: #7bb286;
    color: white;
    border: none;
    padding: 0.6rem 1.4rem;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: #5e9b73;
    }
  }
`;
