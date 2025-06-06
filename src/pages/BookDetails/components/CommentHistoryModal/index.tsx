import React from "react";
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
  IconButton,
  ScrollableContent,
  EmptyState,
} from "./styles";

import { FaHeart, FaCommentDots, FaEllipsisH } from "react-icons/fa";

type Comment = {
  commentaryText: string;
  readPages: number;
  progress: number;
  reaction: string;
};

type Props = {
  bookId: string;
  loading: boolean;
  comments: Comment[];
  onClose: () => void;
};

export const CommentHistoryModal: React.FC<Props> = ({
  comments,
  onClose,
  loading,
}) => {
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
              {comments.map((comment, index) => (
                <StyledCommentCard key={index}>
                  <CommentText>{comment.commentaryText}</CommentText>

                  <ReactionProgress>
                    <span>{getEmoji(comment.reaction)}</span>
                    <span>{comment.progress}%</span>
                  </ReactionProgress>

                  <CommentFooter>
                    <div>
                      <IconButton>
                        <FaHeart /> <span>4</span>
                      </IconButton>
                      <IconButton>
                        <FaCommentDots /> <span>Comentar</span>
                      </IconButton>
                    </div>
                    <FaEllipsisH />
                  </CommentFooter>
                </StyledCommentCard>
              ))}
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

function getEmoji(reaction: string) {
  const map: Record<string, string> = {
    LOVING: "😍",
    EXCITED: "🤩",
    AMAZED: "😱",
    DELUDED: "🤡",
    LAUGH: "😂",
    DISAPPOINTED: "💔",
    CONFUSED: "😕",
    ANGRY: "🤬",
    SAD: "😢",
    NAUSEOUS: "🤢",
    BORED: "😴",
    AGONY: "😩",
  };

  return map[reaction.toUpperCase()] || "💬";
}
