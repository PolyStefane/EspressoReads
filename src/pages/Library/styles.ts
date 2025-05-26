import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to bottom right, #fffefa, #e6f1ea);
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #000;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

export const Highlight = styled.h1`
  font-size: 2.8rem;
  color: #7bb286;
  margin-bottom: 1.2rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const Subtext = styled.p`
  font-size: 1.5rem;
  color: #7bb286;
  margin-bottom: 2rem;
`;

export const StartButton = styled.button`
  background-color: #7bb286;
  color: #fffdf0;
  border: none;
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e9b73;
  }
`;

export const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding-top: 3rem;
  width: 100%;
`;

export const BookCard = styled.div`
  background-color: #fff;
  border-radius: 0.6rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const BookInfo = styled.div`
  padding: 12px;
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
