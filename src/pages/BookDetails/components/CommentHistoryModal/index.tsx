// External libraries
import React, { JSX, useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";

// Assets
import { LikeButton } from "../../../Feed/components/FeedCard/styles";
import { LovingSVG } from "../../../../assets/icons/Reactions/Loving";
import { ExcitedSVG } from "../../../../assets/icons/Reactions/Excited";
import { AmazedSVG } from "../../../../assets/icons/Reactions/Amazed";
import { DeludedSVG } from "../../../../assets/icons/Reactions/Deluded";
import { LaughSVG } from "../../../../assets/icons/Reactions/Laugh";
import { DisappointedSVG } from "../../../../assets/icons/Reactions/Disappointed";
import { ConfusedSVG } from "../../../../assets/icons/Reactions/Confused";
import { AngrySVG } from "../../../../assets/icons/Reactions/Angry";
import { SadSVG } from "../../../../assets/icons/Reactions/Sad";
import { NauseousSVG } from "../../../../assets/icons/Reactions/Nauseous";
import { BoredSVG } from "../../../../assets/icons/Reactions/Bored";
import { AgonySVG } from "../../../../assets/icons/Reactions/Agony";

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
  SpoilerContainer,
  SpoilerLabel,
  RevealButton,
  TrashContainer,
} from "./styles";

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
    LOVING: <LovingSVG />,
    EXCITED: <ExcitedSVG />,
    AMAZED: <AmazedSVG />,
    DELUDED: <DeludedSVG />,
    LAUGH: <LaughSVG />,
    DISAPPOINTED: <DisappointedSVG />,
    CONFUSED: <ConfusedSVG />,
    ANGRY: <AngrySVG />,
    SAD: <SadSVG />,
    NAUSEOUS: <NauseousSVG />,
    BORED: <BoredSVG />,
    AGONY: <AgonySVG />,
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
  const [revealedSpoilers, setRevealedSpoilers] = useState<
    Record<number, boolean>
  >({});

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
                          style={{ fontSize: "1.1rem" }}
                        >
                          <FaHeart /> <span>{comment.likes ?? 0}</span>
                        </LikeButton>
                      </div>
                      <TrashContainer>
                        <FaTrash
                          style={{ cursor: "pointer" }}
                          onClick={async () => {
                            const confirmed = window.confirm(
                              "Are you sure you want to delete this comment?"
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
