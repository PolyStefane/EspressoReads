import styled from "styled-components";

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 8rem;
`;

export const Title = styled.h2`
  font-size: 2.3rem;
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

export const LoadingMessage = styled.p``;

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const NoResultsContainer = styled.p`
  margin-top: 2rem;
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
  background-color: #f4f2e8;
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
