import styled from "styled-components";

export const Card = styled.div`
  background: #d3e8cd;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const Username = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BookBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 12px;
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
  font-size: 1.1rem;
  color: #111;
  margin: 0;
  word-break: break-word;
`;

export const ContainerProgress = styled.div`
  margin-top: auto;
`;

export const Progress = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const Cover = styled.img`
  width: 64px;
  height: 96px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`;

export const BookInfo = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 12px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
  padding-left: 8px;
  font-size: 14px;
  color: #444;
`;
