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
import { ExcitedSVG } from "../../../../assets/icons/Reactions/Excited";
import { LovingSVG } from "../../../../assets/icons/Reactions/Loving";
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

type Props = {
  onClose: () => void;
  bookId: string;
  userId: string;
};

const reactions = [
  { emoji: <LovingSVG />, label: "LOVING" },
  { emoji: <ExcitedSVG />, label: "EXCITED" },
  { emoji: <AmazedSVG />, label: "AMAZED" },
  { emoji: <DeludedSVG />, label: "DELUDED" },
  { emoji: <LaughSVG />, label: "LAUGH" },
  { emoji: <DisappointedSVG />, label: "DISAPPOINTED" },
  { emoji: <ConfusedSVG />, label: "CONFUSED" },
  { emoji: <AngrySVG />, label: "ANGRY" },
  { emoji: <SadSVG />, label: "SAD" },
  { emoji: <NauseousSVG />, label: "NAUSEOUS" },
  { emoji: <BoredSVG />, label: "BORED" },
  { emoji: <AgonySVG />, label: "AGONY" },
];

type CommentPayload = {
  bookId: string;
  userId: string;
  commentaryText: string;
  readPages: number;
  isSpoiler?: boolean;
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

const apiUrl = import.meta.env.VITE_API_URL;

export async function postCommentary(comment: CommentPayload) {
  try {
    const response = await fetchWithAuth(`${apiUrl}/api/v1/commentary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

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
  const [isSpoiler, setIsSpoiler] = useState(false);

  const handleSaveComment = async () => {
    if (!commentText || !readPages || !selectedReaction) return;

    try {
      await postCommentary({
        bookId,
        userId,
        isSpoiler,
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

        <div style={{ marginTop: "1rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={isSpoiler}
              onChange={(e) => setIsSpoiler(e.target.checked)}
            />
            This comment contains spoilers
          </label>
        </div>

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
