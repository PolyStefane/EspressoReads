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
} from "./styles";

import { FaHeart, FaCommentDots, FaEllipsisH } from "react-icons/fa";

type Comment = {
  commentaryText: string;
  progress: number;
  reaction: string;
};

type Props = {
  bookId: string;
  comments: Comment[];
  onClose: () => void;
};

export const CommentHistoryModal: React.FC<Props> = ({ comments, onClose }) => {
  return (
    <Overlay>
      <Modal>
        <Title>Comment History</Title>

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

        <ModalActions>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalActions>
      </Modal>
    </Overlay>
  );
};

function getEmoji(reaction: string) {
  const map: Record<string, string> = {
    LOVED: "😍",
    HAPPY: "🤩",
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
