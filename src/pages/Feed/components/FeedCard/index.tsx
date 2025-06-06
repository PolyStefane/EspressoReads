// External libraries
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
  CommentText,
  ContainerBook,
  ContainerProgress,
  BookTitle,
  BookAuthor,
  LikeButton,
} from "./styles";

interface Props {
  comment: any;
}

export const FeedCard: React.FC<Props> = ({ comment }) => {
  const reactionMap: Record<string, string> = {
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

  const [likes, setLikes] = useState<number>(comment.likes ?? 0);
  const [liked, setLiked] = useState<boolean>(comment.liked ?? false);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    if (loading) return;
    setLoading(true);
    const action = liked ? "decrease" : "increase";
    try {
      const commentaryId =
        comment.commentaryId || comment.commentary?.commentaryId;
      if (!commentaryId) return;
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://books-social.onrender.com/api/v1/commentary/like/${commentaryId}/${action}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );
      if (res.ok) {
        const updated = await res.json();
        setLikes(updated.likes ?? 0);
        if (typeof updated.liked === "boolean") setLiked(updated.liked);
        else setLiked(!liked);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Username>
        <img
          src="/img/user.png"
          alt="avatar"
          style={{ width: 20, height: 20, borderRadius: "50%" }}
        />
        @{comment.userName || comment.username || "Anonymous"}
      </Username>

      <BookBox>
        <Left>
          <CommentText>{comment.commentaryText}</CommentText>

          <ContainerProgress>
            <Progress>
              {reactionMap[comment.reaction] || "💬"} {comment.progress}%
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
              {comment.bookTitle || comment.book?.title || " Unknown Title"}
            </BookTitle>
            <BookAuthor>
              {comment.bookAuthor || comment.book?.author || "Unknown Author"}
            </BookAuthor>
          </BookInfo>
        </ContainerBook>
      </BookBox>

      <Actions>
        <LikeButton
          $liked={liked}
          $loading={loading}
          onClick={loading ? undefined : handleLike}
          title={liked ? "Dislike" : "Like"}
        >
          {liked ? <FaHeart /> : <FaRegHeart />} <span>{likes}</span>
        </LikeButton>
        <span>💬 Comment</span>
      </Actions>
    </Card>
  );
};
