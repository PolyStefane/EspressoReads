import React from "react";
import {
  Card,
  Left,
  BookBox,
  CommentText,
  Progress,
  Cover,
  BookInfo,
  Username,
  Actions,
  ContainerProgress,
  ContainerBook,
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
            <strong>
              {comment.bookTitle || comment.book?.title || " Unknown Title"}
            </strong>
            <br />
            <span>
              {comment.bookAuthor || comment.book?.author || "Unknown Author"}
            </span>
          </BookInfo>
        </ContainerBook>
      </BookBox>

      <Actions>
        <span>❤️ {comment.likes ?? 0}</span>
        <span>💬 Comment</span>
      </Actions>
    </Card>
  );
};
