import { useState } from "react";
import { toast } from "sonner";

const apiUrl = import.meta.env.VITE_API_URL;

export function useReplies(commentaryId: string | undefined) {
  const [replies, setReplies] = useState<any[]>([]);
  const [repliesLoaded, setRepliesLoaded] = useState(false);

  const loadReplies = async () => {
    if (!commentaryId) return;
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`${apiUrl}/api/v1/reply/${commentaryId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();

        const parsedReplies = (data.replies || []).map((entry: any) => ({
          ...entry.reply,
          username: entry.username,
        }));

        setReplies(parsedReplies);
        setRepliesLoaded(true);
      }
    } catch (err) {
      toast.error("Error loading replies!");
    }
  };

  const sendReply = async (replyText: string) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    if (!userId || !token || !replyText.trim()) {
      toast.error("Please fill in the comment!");
      return false;
    }
    try {
      const res = await fetch(`${apiUrl}/api/v1/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, commentaryId, replyText }),
      });
      if (res.ok) {
        await loadReplies();
        toast.success("Reply sent successfully!");
        return true;
      } else {
        toast.error("Failed to send reply!");
        return false;
      }
    } catch {
      toast.error("Failed to send reply!");
      return false;
    }
  };

  return { replies, setReplies, repliesLoaded, loadReplies, sendReply };
}
