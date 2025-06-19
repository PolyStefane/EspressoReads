// External libraries
import React, { JSX, useState } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { toast } from 'sonner';

// Assets
import { LikeButton } from '../../../Feed/components/FeedCard/styles';

// Services
import { fetchWithAuth } from '../../../../Services/api';

// Styles
import {
  Overlay,
  Modal,
  Title,
  ModalActions,
  CloseButton,
  CommentList,
  StyledCommentCard,
  CommentText,
  CommentFooter,
  ReactionProgress,
  ScrollableContent,
  EmptyState,
  SpoilerContainer,
  SpoilerLabel,
  RevealButton,
  TrashContainer,
  ConfirmationWrapper,
  ConfirmButton,
  CancelButton,
} from './styles';

type Comment = {
  commentaryId: string;
  commentaryText: string;
  readPages: number;
  progress: number;
  reaction: string;
  likes?: number;
  isLiked?: boolean;
  liked?: boolean;
  isSpoiler?: boolean;
};

const apiUrl = import.meta.env.VITE_API_URL;

type Props = {
  bookId: string;
  loading: boolean;
  comments: Comment[];
  onClose: () => void;
  onRefresh: () => void;
};

function getEmoji(reaction: string) {
  const map: Record<string, JSX.Element> = {
    LOVING: <img src="/img/reactions/loving.png" alt="Loving" />,
    EXCITED: <img src="/img/reactions/excited.png" alt="Excited" />,
    AMAZED: <img src="/img/reactions/amazed.png" alt="Amazed" />,
    DELUDED: <img src="/img/reactions/deluded.png" alt="Deluded" />,
    LAUGH: <img src="/img/reactions/laugh.png" alt="Laugh" />,
    DISAPPOINTED: (
      <img src="/img/reactions/disappointed.png" alt="Disappointed" />
    ),
    CONFUSED: <img src="/img/reactions/confused.png" alt="Confused" />,
    ANGRY: <img src="/img/reactions/angry.png" alt="Angry" />,
    SAD: <img src="/img/reactions/sad.png" alt="Sad" />,
    NAUSEOUS: <img src="/img/reactions/nauseous.png" alt="Nauseous" />,
    BORED: <img src="/img/reactions/bored.png" alt="Bored" />,
    AGONY: <img src="/img/reactions/agony.png" alt="Agony" />,
  };

  const reactionImage = map[reaction.toUpperCase()];

  if (reactionImage) {
    return React.cloneElement(reactionImage, {
      style: { width: '24px', height: '24px', verticalAlign: 'middle' },
    });
  }

  return '💬';
}

function formatText(text: string) {
  return text.replace(/\n/g, '<br />');
}

async function deleteComment(commentId: string) {
  const response = await fetchWithAuth(
    `${apiUrl}/api/v1/commentary/delete/${commentId}`,
    {
      method: 'DELETE',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to delete comment');
  }
}

export const CommentHistoryModal: React.FC<Props> = ({
  loading,
  comments,
  onClose,
  onRefresh,
}) => {
  const [revealedSpoilers, setRevealedSpoilers] = useState<
    Record<number, boolean>
  >({});
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Overlay>
      <Modal>
        <Title>Comment History</Title>

        {loading ? (
          <EmptyState>⏳ Loading comments...</EmptyState>
        ) : comments.length === 0 ? (
          <EmptyState>
            📝 No comments yet.
            <br />
            Be the first to share your thoughts!
          </EmptyState>
        ) : (
          <ScrollableContent>
            <CommentList>
              {comments.map((comment, index) => {
                return (
                  <StyledCommentCard key={index}>
                    {comment.isSpoiler && !revealedSpoilers[index] ? (
                      <SpoilerContainer>
                        <SpoilerLabel>⚠️ Spoiler Alert! ⚠️</SpoilerLabel>
                        <RevealButton
                          onClick={() =>
                            setRevealedSpoilers((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                        >
                          Show Comment
                        </RevealButton>
                      </SpoilerContainer>
                    ) : (
                      <CommentText
                        dangerouslySetInnerHTML={{
                          __html: formatText(comment.commentaryText),
                        }}
                      />
                    )}

                    <ReactionProgress>
                      <span>{getEmoji(comment.reaction)}</span>
                      <span>{comment.progress}%</span>
                    </ReactionProgress>

                    <CommentFooter>
                      <div>
                        <LikeButton
                          $liked={comment.isLiked ?? comment.liked ?? false}
                          $loading={false}
                          style={{ fontSize: '1.1rem' }}
                        >
                          <FaHeart /> <span>{comment.likes ?? 0}</span>
                        </LikeButton>
                      </div>
                      <TrashContainer>
                        {commentToDelete === comment.commentaryId ? (
                          <ConfirmationWrapper>
                            <span>
                              {isDeleting ? 'Deleting...' : 'Are you sure?'}
                            </span>
                            <ConfirmButton
                              disabled={isDeleting}
                              onClick={async () => {
                                setIsDeleting(true);
                                try {
                                  await deleteComment(comment.commentaryId);
                                  toast.success(
                                    'Comment deleted successfully!',
                                  );
                                  setCommentToDelete(null);
                                  onRefresh();
                                } catch (error) {
                                  toast.error('Failed to delete comment.');
                                  console.error(
                                    'Error deleting comment:',
                                    error,
                                  );
                                } finally {
                                  setIsDeleting(false);
                                }
                              }}
                            >
                              Yes
                            </ConfirmButton>
                            <CancelButton
                              disabled={isDeleting}
                              onClick={() => setCommentToDelete(null)}
                            >
                              No
                            </CancelButton>
                          </ConfirmationWrapper>
                        ) : (
                          <FaTrash
                            style={{
                              cursor: isDeleting ? 'not-allowed' : 'pointer',
                              color: isDeleting ? '#ccc' : 'inherit',
                            }}
                            onClick={() => {
                              if (!isDeleting) {
                                setCommentToDelete(comment.commentaryId);
                              }
                            }}
                          />
                        )}
                      </TrashContainer>
                    </CommentFooter>
                  </StyledCommentCard>
                );
              })}
            </CommentList>
          </ScrollableContent>
        )}

        <ModalActions>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalActions>
      </Modal>
    </Overlay>
  );
};
