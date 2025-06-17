import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: #fffdfc;
  padding: 2rem;
  border-radius: 1.2rem;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  opacity: 0.96;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const CloseButton = styled.button`
  background: #7bb286;
  color: white;
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ScrollableContent = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 0.5rem;

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const StyledCommentCard = styled.div`
  background-color: #d4e8d4;
  z-index: 2;
  opacity: 1;
  padding: 1rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
`;

export const CommentText = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  resize: none;
  margin-bottom: 1rem;
`;

export const SpoilerContainer = styled.div`
  background-color: #f6f6f6;
  border: 1px dashed #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  color: #555;
  margin-bottom: 1rem;
`;

export const SpoilerLabel = styled.p`
  margin: 0;
  font-style: italic;
  font-weight: 500;
  color: #666;
`;

export const RevealButton = styled.button`
  margin-top: 0.75rem;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  border-radius: 6px;
  border: 1px solid #aaa;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const ReactionProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.3rem;
`;

export const TrashContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ConfirmationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 0.9rem;
    color: #616161;
  }
`;

const ConfirmationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ConfirmButton = styled(ConfirmationButton)`
  color: #e57373; /* Vermelho Pastel */
`;

export const CancelButton = styled(ConfirmationButton)`
  color: #757575; /* Cinza */
`;

export const CommentFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const EmptyState = styled.div`
  text-align: center;
  color: #666;
  padding: 2rem;
  font-size: 1rem;
  opacity: 0.8;
`;
