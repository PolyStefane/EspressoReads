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
  CommentBox,
  CommentTextarea,
  SendButton,
  CommentButton,
} from "./styles";
import { CommentIconSVG } from "../../../../assets/icons/CommentIcon";

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
  const [liked, setLiked] = useState<boolean>(
    comment.isLiked ?? comment.liked ?? false
  );
  const [loading, setLoading] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLike = async () => {
    if (loading) return;
    setLoading(true);
    const action = liked ? "decrease" : "increase";
    try {
      const commentaryId =
        comment.commentaryId || comment.commentary?.commentaryId;

      if (!commentaryId) {
        console.error("Commentary ID not found.");
        setLoading(false);
        return;
      }

      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("User ID not found.");
        setLoading(false);
        return;
      }

      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://books-social.onrender.com/api/v1/commentary/like/${commentaryId}/${action}/${userId}`,
        {
          method: "PATCH",
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

  const handleSendComment = () => {
    //logica
    setShowCommentBox(false);
    setCommentText("");
  };

  return (
    <Card>
      <Username>
        <img
          src="/img/user.png"
          alt="avatar"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
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
        <CommentButton
          type="button"
          onClick={() => setShowCommentBox((v) => !v)}
          title="Comment"
        >
          <CommentIconSVG /> Comment
        </CommentButton>
      </Actions>
      {showCommentBox && (
        <CommentBox>
          <CommentTextarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your reply..."
          />
          <SendButton onClick={handleSendComment}>Send</SendButton>
        </CommentBox>
      )}
    </Card>
  );
};
