import styled from "styled-components";

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 8rem;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: #1f1f1f;
  text-align: center;
  margin-bottom: 2.5rem;
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
export const FilterContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 1.2rem;
    color: #999;
    font-size: 1.2rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.6rem 1rem 0.6rem 2.8rem;
  font-size: 1rem;
  border-radius: 2rem;
  border: none;
  background-color: #f5f4f2;
  width: 20rem;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #d0d0d0;
  }
`;

export const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding-top: 3rem;
  width: 90%;
`;
