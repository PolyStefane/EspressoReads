import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

export const SpinnerCircle = styled.div`
  border: 4px solid #e0e0e0;
  border-top: 4px solid #7bb47b;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerText = styled.span`
  margin-top: 16px;
  color: #7bb47b;
  font-weight: 500;
`;
