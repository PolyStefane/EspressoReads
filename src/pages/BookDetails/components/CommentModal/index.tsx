// External libraries
import { toast } from "sonner";
import React, { useState } from "react";

// Services
import { fetchWithAuth } from "../../../../Services/api";

// Styles
import {
  CancelButton,
  EmojiBox,
  EmojiGrid,
  Input,
  Modal,
  ModalActions,
  Overlay,
  ReactionSection,
  SaveButton,
  Textarea,
  Title,
} from "./styles";

type Props = {
  onClose: () => void;
  bookId: string;
  userId: string;
};

const reactions = [
  { emoji: "😍", label: "LOVING" },
  { emoji: "🤩", label: "EXCITED" },
  { emoji: "😱", label: "AMAZED" },
  { emoji: "🤡", label: "DELUDED" },
  { emoji: "😂", label: "LAUGH" },
  { emoji: "💔", label: "DISAPPOINTED" },
  { emoji: "😕", label: "CONFUSED" },
  { emoji: "🤬", label: "ANGRY" },
  { emoji: "😢", label: "SAD" },
  { emoji: "🤢", label: "NAUSEOUS" },
  { emoji: "😴", label: "BORED" },
  { emoji: "😩", label: "AGONY" },
];

type CommentPayload = {
  bookId: string;
  userId: string;
  commentaryText: string;
  readPages: number;
  progress: number;
  reaction:
    | "LOVING"
    | "EXCITED"
    | "AMAZED"
    | "DELUDED"
    | "LAUGH"
    | "DISAPPOINTED"
    | "CONFUSED"
    | "ANGRY"
    | "SAD"
    | "NAUSEOUS"
    | "BORED"
    | "AGONY";
};

export async function postCommentary(comment: CommentPayload) {
  try {
    const response = await fetchWithAuth(
      "https://books-social-g338.onrender.com/api/v1/commentary",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );

    if (!response.ok) throw new Error("Failed to post comment");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
}

export const CommentModal: React.FC<Props> = ({ onClose, bookId, userId }) => {
  const [commentText, setCommentText] = useState("");
  const [readPages, setReadPages] = useState("");
  const [progress] = useState("");
  const [selectedReaction, setSelectedReaction] = useState<
    CommentPayload["reaction"] | null
  >(null);

  const handleSaveComment = async () => {
    if (!commentText || !readPages || !selectedReaction) return;

    try {
      await postCommentary({
        bookId,
        userId,
        commentaryText: commentText,
        readPages: Number(readPages),
        progress: Number(progress),
        reaction: selectedReaction,
      });
      onClose();
      toast.success("Comment saved successfully!");
    } catch (err) {
      console.error("Erro ao salvar comentário:", err);
    }
  };

  return (
    <Overlay>
      <Modal>
        <Title>Add Comment</Title>

        <Textarea
          placeholder="Write your impressions/comments"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />

        <Input
          placeholder="Enter your progress (page number)"
          value={readPages}
          onChange={(e) => setReadPages(e.target.value)}
        />

        <ReactionSection>
          <label>Add reaction:</label>
          <EmojiGrid>
            {reactions.map((r) => (
              <EmojiBox
                key={r.label}
                onClick={() =>
                  setSelectedReaction(r.label as CommentPayload["reaction"])
                }
                $selected={selectedReaction === r.label}
                title={r.label}
              >
                {r.emoji}
              </EmojiBox>
            ))}
          </EmojiGrid>
        </ReactionSection>

        <ModalActions>
          <SaveButton
            onClick={handleSaveComment}
            disabled={!commentText || !readPages || !selectedReaction}
          >
            Save
          </SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ModalActions>
      </Modal>
    </Overlay>
  );
};
