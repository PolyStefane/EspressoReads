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
        @{comment.userName || "Anônimo"}
      </Username>

      <BookBox>
        <Left>
          <CommentText>{comment.text}</CommentText>

          <ContainerProgress>
            <Progress>
              {reactionMap[comment.reaction] || "💬"} {comment.progress || 0}%
            </Progress>
          </ContainerProgress>
        </Left>

        <div>
          <Cover src={comment.bookCoverUrl} alt={comment.bookTitle} />
          <BookInfo>
            <strong>{comment.bookTitle}</strong>
            <br />
            <span>{comment.bookAuthor}</span>
          </BookInfo>
        </div>
      </BookBox>

      <Actions>
        <span>❤️ {comment.likes || 0}</span>
        <span>💬 Comment</span>
      </Actions>
    </Card>
  );
};
