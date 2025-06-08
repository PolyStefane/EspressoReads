// External libraries
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

// Types
import { Reply } from '../../../../types';

import {
  RepliesContainer,
  ReplyBox,
  ReplyContent,
  ReplyText,
  ReplyUser,
  ReplyActions,
  ReplyDelete,
} from './styles';

interface RepliesListProps {
  replies: Reply[];
}

export const RepliesList: React.FC<RepliesListProps> = ({ replies }) => {
  const myUserId = localStorage.getItem('userId');

  const handleDelete = (replyId: string) => {
    // Quando o backend estiver pronto
    // await fetch(`/api/reply/${replyId}`, { method: 'DELETE', ... })
    //atualizar a lista de replies
    alert('Função de deletar reply ainda não implementada.');
  };

  return (
    <RepliesContainer>
      {replies
        .filter((reply) => reply && reply.replyText)
        .map((reply, idx) => (
          <ReplyBox key={idx}>
            <ReplyContent>
              <ReplyUser>@{reply.username || 'Anonymous'}</ReplyUser>
              <ReplyText>{reply.replyText}</ReplyText>
            </ReplyContent>
            <ReplyActions>
              {reply.userId === myUserId && (
                <ReplyDelete
                  as="button"
                  title="Excluir reply"
                  onClick={() => handleDelete(reply.replyId)}
                >
                  <FiTrash2 />
                </ReplyDelete>
              )}
            </ReplyActions>
          </ReplyBox>
        ))}
    </RepliesContainer>
  );
};
