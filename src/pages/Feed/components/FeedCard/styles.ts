import styled from "styled-components";

export const Card = styled.div`
  background: #bdd8bb;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const Username = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
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

export const SpoilerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f6f6f6;
  border: 1px dashed #ccc;
  height: 8.2rem;
  border-radius: 8px;
  padding: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const SpoilerText = styled.p`
  margin: 0;
  font-style: italic;
  font-weight: 500;
  color: #666;
`;

export const ShowSpoilerButton = styled.button`
  margin-top: 1.2rem;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  border-radius: 6px;
  border: 1px solid #aaa;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;
  &:hover {
    background-color: #eaeaea;
  }
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
  width: 5.6rem;
  /* height: 9rem; */
  display: flex;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`;

export const BookInfo = styled.div`
  text-align: center;
  margin-top: 8px;
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
  font-size: 1.1rem;
  max-width: 10rem;
  display: block;
  margin: 0 auto;
  word-break: break-word;
`;

export const BookAuthor = styled.span`
  font-size: 1rem;
  color: gray;
`;

export const LikeButton = styled.span<{ $liked: boolean; $loading: boolean }>`
  cursor: ${({ $loading }) => ($loading ? "not-allowed" : "pointer")};
  color: ${({ $liked }) => ($liked ? "#F82371" : "#F82371")};
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;
  transition: color 0.2s;
  font-size: 1.2rem;
  &:hover {
    color: ${({ $liked }) => ($liked ? "#b71c1c" : "#444")};
  }
`;

export const CommentButton = styled.button`
  background: none;
  border: none;
  color: #888;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.1rem;
  margin-left: 18px;
  transition: color 0.2s;
  padding: 0;
  outline: none;

  &:hover {
    color: #000;
  }

  svg {
    margin-right: 4px;
    font-size: 1.2em;
  }
`;

export const CommentBox = styled.div`
  margin-top: 12px;
  width: 100%;
`;

export const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 60px;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  resize: vertical;
`;

export const SendButton = styled.button`
  margin-top: 8px;
  padding: 6px 16px;
  border-radius: 6px;
  background: #7bb286;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #4a6;
  }
`;
