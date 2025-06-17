// External libraries
import { toast } from "sonner";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

// Types
import { Reply } from "../../../../types";

import {
  ReplyBox,
  ReplyText,
  ReplyUser,
  ReplyDelete,
  ReplyActions,
  ReplyContent,
  RepliesContainer,
} from "./styles";

interface RepliesListProps {
  replies: Reply[];
  setReplies: React.Dispatch<React.SetStateAction<Reply[]>>;
  isActionDisabled: boolean;
}

const apiUrl = import.meta.env.VITE_API_URL;

export const RepliesList: React.FC<RepliesListProps> = ({
  replies,
  setReplies,
  isActionDisabled,
}) => {
  const [deletingReplyId, setDeletingReplyId] = useState<string | null>(null);
  const myUserId = localStorage.getItem("userId");

  const handleDelete = async (replyId: string) => {
    if (isActionDisabled || deletingReplyId) return;

    setDeletingReplyId(replyId);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/v1/reply/delete/${replyId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      if (!res.ok) throw new Error("Failed to delete reply");

      toast.success("Reply deleted successfully");

      setReplies((prev) => prev.filter((r) => r.replyId !== replyId));
    } catch (err) {
      console.error("Error deleting reply:", err);
      toast.error("Error deleting reply. Please try again.");
    } finally {
      setDeletingReplyId(null);
    }
  };

  return (
    <RepliesContainer>
      {replies
        .filter((reply) => reply && reply.replyText)
        .map((reply) => (
          <ReplyBox key={reply.replyId}>
            <ReplyContent>
              <ReplyUser>@{reply.username || "Anonymous"}</ReplyUser>
              <ReplyText>{reply.replyText}</ReplyText>
            </ReplyContent>
            <ReplyActions>
              {reply.userId === myUserId && (
                <ReplyDelete
                  as="button"
                  title="Excluir reply"
                  onClick={() => handleDelete(reply.replyId)}
                  disabled={isActionDisabled || !!deletingReplyId}
                >
                  <FaTrash
                    color={
                      isActionDisabled || !!deletingReplyId ? "#ccc" : "inherit"
                    }
                  />
                </ReplyDelete>
              )}
            </ReplyActions>
          </ReplyBox>
        ))}
    </RepliesContainer>
  );
};
