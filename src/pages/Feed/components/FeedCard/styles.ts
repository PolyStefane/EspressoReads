import styled from "styled-components";

export const Card = styled.div`
  background: #d3e8cd;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const Username = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BookBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
  min-height: 100px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CommentText = styled.p`
  font-size: 1.2rem;
  color: #111;
  margin: 0 2rem 0 1rem;
  word-break: break-word;
`;

export const ContainerProgress = styled.div`
  margin-top: auto;
`;

export const Progress = styled.div`
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const ContainerBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Cover = styled.img`
  width: 5.5rem;
  /* height: 9rem; */
  display: flex;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`;

export const BookInfo = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
  padding-left: 8px;
  font-size: 14px;
  color: #444;
`;

export const BookTitle = styled.span`
  font-weight: bold;
  font-size: 1rem;
  max-width: 10rem;
  display: block;
  margin: 0 auto;
  word-break: break-word;
`;

export const BookAuthor = styled.span`
  font-size: 0.9rem;
  color: gray;
`;
