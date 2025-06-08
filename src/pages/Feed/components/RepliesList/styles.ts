import styled from 'styled-components';

export const RepliesContainer = styled.div`
  margin: 1.5rem 0;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReplyBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ReplyContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReplyUser = styled.span`
  font-size: 0.95rem;
  color: #7a7a7a;
  font-weight: 500;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const ReplyText = styled.span`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
  word-break: break-word;
`;

export const ReplyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ReplyDelete = styled.button`
  background: none;
  border: none;
  color: #bdbdbd;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: flex-end;
  transition: color 0.2s;
  margin-left: 8px;
  &:hover {
    color: #e57373;
  }
`;
