// External libraries
import React from "react";
import { FaHeart, FaEllipsisH, FaTrash } from "react-icons/fa";

// Services
import { fetchWithAuth } from "../../../../Services/api";

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
} from "./styles";
import { LikeButton } from "../../../Feed/components/FeedCard/styles";

type Comment = {
  commentaryId: string;
  commentaryText: string;
  readPages: number;
  progress: number;
  reaction: string;
  likes?: number;
  isLiked?: boolean;
  liked?: boolean;
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

function formatText(text: string) {
  return text.replace(/\n/g, "<br />");
}

async function deleteComment(commentId: string) {
  try {
    const response = await fetchWithAuth(
      `${apiUrl}/api/v1/commentary/delete/${commentId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete comment");
    }

    console.log("Comment deleted");
    // Atualize a UI conforme necessário, por exemplo, recarregando os comentários
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
}

export const CommentHistoryModal: React.FC<Props> = ({
  loading,
  comments,
  onClose,
  onRefresh,
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
              {comments.map((comment, index) => {
                return (
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
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <FaEllipsisH />
                        <FaTrash
                          style={{ cursor: "pointer" }}
                          onClick={async () => {
                            const confirmed = window.confirm(
                              "Tem certeza que deseja excluir?"
                            );
                            if (!confirmed) return;

                            console.log(
                              "🔴 Deletando comentário com ID:",
                              comment.commentaryId
                            );
                            await deleteComment(comment.commentaryId);
                            onRefresh();
                          }}
                        />
                      </div>
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
