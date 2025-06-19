// External libraries
import { toast } from 'sonner';
import React, { useState } from 'react';

// Services
import { fetchWithAuth } from '../../../../Services/api';

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
} from './styles';

type Props = {
  onClose: () => void;
  bookId: string;
  userId: string;
};

const reactions = [
  {
    emoji: <img src="/img/reactions/loving.png" alt="Loving" />,
    label: 'LOVING',
  },
  {
    emoji: <img src="/img/reactions/excited.png" alt="Excited" />,
    label: 'EXCITED',
  },
  {
    emoji: <img src="/img/reactions/amazed.png" alt="Amazed" />,
    label: 'AMAZED',
  },
  {
    emoji: <img src="/img/reactions/deluded.png" alt="Deluded" />,
    label: 'DELUDED',
  },
  {
    emoji: <img src="/img/reactions/laugh.png" alt="Laugh" />,
    label: 'LAUGH',
  },
  {
    emoji: <img src="/img/reactions/disappointed.png" alt="Disappointed" />,
    label: 'DISAPPOINTED',
  },
  {
    emoji: <img src="/img/reactions/confused.png" alt="Confused" />,
    label: 'CONFUSED',
  },
  {
    emoji: <img src="/img/reactions/angry.png" alt="Angry" />,
    label: 'ANGRY',
  },
  {
    emoji: <img src="/img/reactions/sad.png" alt="Sad" />,
    label: 'SAD',
  },
  {
    emoji: <img src="/img/reactions/nauseous.png" alt="Nauseous" />,
    label: 'NAUSEOUS',
  },
  {
    emoji: <img src="/img/reactions/bored.png" alt="Bored" />,
    label: 'BORED',
  },
  {
    emoji: <img src="/img/reactions/agony.png" alt="Agony" />,
    label: 'AGONY',
  },
];

type CommentPayload = {
  bookId: string;
  userId: string;
  commentaryText: string;
  readPages: number;
  isSpoiler?: boolean;
  progress: number;
  reaction:
    | 'LOVING'
    | 'EXCITED'
    | 'AMAZED'
    | 'DELUDED'
    | 'LAUGH'
    | 'DISAPPOINTED'
    | 'CONFUSED'
    | 'ANGRY'
    | 'SAD'
    | 'NAUSEOUS'
    | 'BORED'
    | 'AGONY';
};

const apiUrl = import.meta.env.VITE_API_URL;

export async function postCommentary(comment: CommentPayload) {
  try {
    const response = await fetchWithAuth(`${apiUrl}/api/v1/commentary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) throw new Error('Failed to post comment');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
}

export const CommentModal: React.FC<Props> = ({ onClose, bookId, userId }) => {
  const [commentText, setCommentText] = useState('');
  const [readPages, setReadPages] = useState('');
  const [progress] = useState('');
  const [selectedReaction, setSelectedReaction] = useState<
    CommentPayload['reaction'] | null
  >(null);
  const [isSpoiler, setIsSpoiler] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveComment = async () => {
    if (!commentText || !readPages || !selectedReaction || isSaving) return;

    setIsSaving(true);
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
      toast.success('Comment saved successfully!');
    } catch (err) {
      toast.error('Failed to save comment.');
      console.error('Erro ao salvar comentário:', err);
    } finally {
      setIsSaving(false);
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
          type="number"
          onChange={(e) => setReadPages(e.target.value)}
        />

        <ReactionSection>
          <label>Add reaction:</label>
          <EmojiGrid>
            {reactions.map((r) => (
              <EmojiBox
                key={r.label}
                onClick={() =>
                  setSelectedReaction(r.label as CommentPayload['reaction'])
                }
                $selected={selectedReaction === r.label}
                title={r.label}
              >
                {r.emoji}
              </EmojiBox>
            ))}
          </EmojiGrid>
        </ReactionSection>

        <div style={{ marginTop: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            disabled={
              !commentText || !readPages || !selectedReaction || isSaving
            }
          >
            {isSaving ? 'Saving...' : 'Save'}
          </SaveButton>
          <CancelButton onClick={onClose} disabled={isSaving}>
            Cancel
          </CancelButton>
        </ModalActions>
      </Modal>
    </Overlay>
  );
};
