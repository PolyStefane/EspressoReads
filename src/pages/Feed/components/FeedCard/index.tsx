// External libraries
import React, { JSX, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Components
import { RepliesList } from '../RepliesList';

// Assets
import { CommentIconSVG } from '../../../../assets/icons/CommentIcon';

// Hooks
import { useReplies } from './hooks/useReplies';

// Types
import { Comment } from '../../../../types';

// Styles
import {
  Card,
  Left,
  Cover,
  Actions,
  BookBox,
  BookInfo,
  Progress,
  Username,
  BookTitle,
  BookAuthor,
  LikeButton,
  CommentBox,
  SendButton,
  SpoilerBox,
  SpoilerText,
  CommentText,
  ContainerBook,
  CommentButton,
  LoadingReplies,
  CommentTextarea,
  ShowSpoilerButton,
  ContainerProgress,
  ReactionContainer,
} from './styles';

interface Props {
  comment: Comment;
}

export const FeedCard: React.FC<Props> = ({ comment }) => {
  const reactionMap: Record<string, JSX.Element> = {
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

  const [likes, setLikes] = useState<number>(comment.likes ?? 0);
  const [liked, setLiked] = useState<boolean>(
    comment.isLiked ?? comment.liked ?? false,
  );
  const [loading, setLoading] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [isSendingReply, setIsSendingReply] = useState(false);
  const commentaryId = comment.commentaryId || comment.commentary?.commentaryId;

  const { replies, setReplies, repliesLoaded, loadReplies, sendReply } =
    useReplies(commentaryId);

  const handleSendComment = async () => {
    if (isSendingReply || !commentText.trim()) return;
    setIsSendingReply(true);
    try {
      const ok = await sendReply(commentText.trim());
      if (ok) setCommentText('');
    } finally {
      setIsSendingReply(false);
    }
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleLike = async () => {
    if (loading) return;
    setLoading(true);
    const action = liked ? 'decrease' : 'increase';
    try {
      if (!commentaryId) return setLoading(false);
      const userId = localStorage.getItem('userId');
      if (!userId) return setLoading(false);
      const token = localStorage.getItem('token');
      const res = await fetch(
        `${apiUrl}/api/v1/commentary/like/${commentaryId}/${action}/${userId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        },
      );
      if (res.ok) {
        const updated = await res.json();
        setLikes(updated.likes ?? 0);
        setLiked(typeof updated.liked === 'boolean' ? updated.liked : !liked);
      }
    } finally {
      setLoading(false);
    }
  };

  function formatText(text: string) {
    return text.replace(/\n/g, '<br />');
  }

  return (
    <Card>
      <Username>
        <img
          src="/img/user.png"
          alt="avatar"
          style={{ width: 40, height: 40, borderRadius: '50%' }}
        />
        @{comment.userName || comment.username || 'Anonymous'}
      </Username>

      <BookBox>
        <Left>
          {comment.isSpoiler && !showSpoiler ? (
            <SpoilerBox>
              <SpoilerText>⚠️ Spoiler Alert! ⚠️</SpoilerText>
              <ShowSpoilerButton onClick={() => setShowSpoiler(true)}>
                Show Comment
              </ShowSpoilerButton>
            </SpoilerBox>
          ) : (
            <CommentText
              dangerouslySetInnerHTML={{
                __html: formatText(comment.commentaryText),
              }}
            />
          )}

          <ContainerProgress>
            <Progress>
              <ReactionContainer>
                {React.cloneElement(
                  reactionMap[comment.reaction] || <span>💬</span>,
                )}
              </ReactionContainer>
              {comment.progress}%
            </Progress>
          </ContainerProgress>
        </Left>

        <ContainerBook>
          <Cover
            src={comment.bookCoverUrl || comment.book?.coverUrl}
            alt={comment.bookTitle || comment.book?.title}
          />
          <BookInfo>
            <BookTitle>
              {comment.bookTitle || comment.book?.title || ' Unknown Title'}
            </BookTitle>
            <BookAuthor>
              {comment.bookAuthor || comment.book?.author || 'Unknown Author'}
            </BookAuthor>
          </BookInfo>
        </ContainerBook>
      </BookBox>

      <Actions>
        <LikeButton
          $liked={liked}
          $loading={loading}
          onClick={loading ? undefined : handleLike}
          title={liked ? 'Dislike' : 'Like'}
        >
          {liked ? <FaHeart /> : <FaRegHeart />} <span>{likes}</span>
        </LikeButton>
        <CommentButton
          type="button"
          onClick={() => {
            setShowCommentBox((v) => {
              if (!repliesLoaded && !v) loadReplies();
              return !v;
            });
          }}
          title="Comment"
        >
          <CommentIconSVG /> Comment
        </CommentButton>
      </Actions>
      {showCommentBox && (
        <CommentBox>
          {!repliesLoaded ? (
            <LoadingReplies>Loading replies...</LoadingReplies>
          ) : (
            replies.length > 0 && (
              <RepliesList
                replies={replies}
                setReplies={setReplies}
                isActionDisabled={isSendingReply}
              />
            )
          )}
          <CommentTextarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your reply..."
            disabled={isSendingReply}
          />
          <SendButton
            onClick={handleSendComment}
            disabled={isSendingReply || !commentText.trim()}
          >
            {isSendingReply ? 'Sending...' : 'Send'}
          </SendButton>
        </CommentBox>
      )}
    </Card>
  );
};
