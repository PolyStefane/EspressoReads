// External libraries
import React from "react";
import { FiTrash2 } from "react-icons/fi";

// Types
import { Reply } from "../../../../types";

import {
  RepliesContainer,
  ReplyBox,
  ReplyContent,
  ReplyText,
  ReplyUser,
  ReplyActions,
  ReplyDelete,
} from "./styles";
import { toast } from "sonner";

interface RepliesListProps {
  replies: Reply[];
  setReplies: React.Dispatch<React.SetStateAction<Reply[]>>;
}

const apiUrl = import.meta.env.VITE_API_URL;

export const RepliesList: React.FC<RepliesListProps> = ({
  replies,
  setReplies,
}) => {
  const myUserId = localStorage.getItem("userId");

  const handleDelete = async (replyId: string) => {
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

      // Atualiza a lista local, sem reload
      setReplies((prev) => prev.filter((r) => r.replyId !== replyId));
    } catch (err) {
      console.error("Error deleting reply:", err);
      toast.error("Error deleting reply. Please try again.");
    }
  };

  return (
    <RepliesContainer>
      {replies
        .filter((reply) => reply && reply.replyText)
        .map((reply, idx) => (
          <ReplyBox key={idx}>
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
                >
                  <FiTrash2 />
                </ReplyDelete>
              )}
            </ReplyActions>
          </ReplyBox>
        ))}
    </RepliesContainer>
  );
};
