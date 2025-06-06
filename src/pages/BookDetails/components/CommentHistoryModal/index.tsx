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
import { LikeButton } from "../../../Feed/components/FeedCard/styles";

import { FaHeart, FaCommentDots, FaEllipsisH } from "react-icons/fa";

type Comment = {
  commentaryText: string;
  readPages: number;
  progress: number;
  reaction: string;
  likes?: number;
  isLiked?: boolean;
  liked?: boolean;
};

type Props = {
  bookId: string;
  loading: boolean;
  comments: Comment[];
  onClose: () => void;
};

function formatText(text: string) {
  return text.replace(/\n/g, "<br />");
}
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
                  <CommentText
                    dangerouslySetInnerHTML={{
                      __html: formatText(comment.commentaryText),
                    }}
                  />
                  <ReactionProgress>
                    <span>{getEmoji(comment.reaction)}</span>
                    <span>{comment.progress}%</span>
                  </ReactionProgress>

                  <CommentFooter>
                    <div>
                      <LikeButton
                        $liked={comment.isLiked ?? comment.liked ?? false}
                        $loading={false}
                        style={{ fontSize: "1.1rem" }}
                      >
                        <FaHeart /> <span>{comment.likes ?? 0}</span>
                      </LikeButton>
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
