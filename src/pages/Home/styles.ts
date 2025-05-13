import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fffdf0;
  overflow: hidden;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const Highlight = styled.h1`
  font-size: 2.5rem;
  color: #7bb286;
  margin-bottom: 1.2rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const Subtext = styled.p`
  font-size: 1rem;
  color: #a4d1a4;
  margin-bottom: 2rem;
`;

export const StartButton = styled.button`
  background-color: #7bb286;
  color: #fffdf0;
  border: none;
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e9b73;
  }
`;
