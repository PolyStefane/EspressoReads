import React, { useState } from "react";

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
};

const reactions = [
  { emoji: "😍", label: "Loving" },
  { emoji: "🤩", label: "Excited" },
  { emoji: "😱", label: "Amazed" },
  { emoji: "🤡", label: "Deluded" },
  { emoji: "😂", label: "Laugh" },
  { emoji: "💔", label: "Disappointed" },
  { emoji: "😕", label: "Confused" },
  { emoji: "🤬", label: "Angry" },
  { emoji: "😢", label: "Sad" },
  { emoji: "🤢", label: "Nauseous" },
  { emoji: "😴", label: "Bored" },
  { emoji: "😩", label: "Agony" },
];

export const CommentModal: React.FC<Props> = ({ onClose }) => {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelectedReaction(label);
  };

  return (
    <Overlay>
      <Modal>
        <Title>Add Comment</Title>

        <Textarea placeholder="Write your impressions/comments" />
        <Input placeholder="Enter your progress (page or percentage)" />

        <ReactionSection>
          <label>Add reaction:</label>
          <EmojiGrid>
            {reactions.map((r) => (
              <EmojiBox
                key={r.label}
                onClick={() => setSelectedReaction(r.label)}
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
            onClick={() => {
              // Aqui você pode enviar `reaction` para o backend
              onClose();
            }}
          >
            Save
          </SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ModalActions>
      </Modal>
    </Overlay>
  );
};
