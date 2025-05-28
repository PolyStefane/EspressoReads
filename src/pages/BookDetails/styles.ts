import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  font-family: sans-serif;
`;

export const Sidebar = styled.div`
  background-color: #dfeee7;
  width: 200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-weight: bold;
  border-right: 2px solid #aaa;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    text-align: left;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MainContent = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 2rem;
`;

export const BookPanel = styled.div`
  background: white;
  border: 2px solid #444;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
`;

export const CoverImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px #aaa;
  }
`;

export const IconGroup = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Stars = styled.div`
  font-size: 1.3rem;
`;

export const HeartIcon = styled.div`
  font-size: 1.5rem;
  color: purple;
`;

export const Field = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.div`
  font-weight: bold;
`;

export const Highlight = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Tag = styled.span<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-right: 0.5rem;
`;

export const StatusRow = styled.div`
  margin: 1rem 0;
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  button {
    background-color: #cce3d3;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #aacdbd;
    }
  }
`;
