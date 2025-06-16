// External libraries
import React, { useEffect, useState } from "react";

// Components
import { FeedCard } from "./components/FeedCard";
import { Spinner } from "../../components/Spinner";

// Services
import { fetchWithAuth } from "../../Services/api";

// Styles
import { FeedContainer, FeedSubtitle, FeedTitle } from "./styles";

export const Feed: React.FC = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const res = await fetchWithAuth(`/commentary/random/${userId}`);
        const data = await res.json();
        console.log("API:", data.comments);

        const enriched = (data.comments || []).map((comment: any) => ({
          ...comment,
          commentaryText: comment.commentary?.commentaryText || "No text...",
          readPages: comment.commentary?.readPages ?? 0,
          progress: comment.commentary?.progress ?? 0,
          reaction: comment.commentary?.reaction,
          bookTitle: comment.book?.title || "Unknown Title",
          bookAuthor: comment.book?.author || "Unknown Author",
          bookCoverUrl:
            comment.book?.coverUrl ||
            "https://m.media-amazon.com/images/I/71fEYN72-UL._SY466_.jpg",
          username: comment.username || "Anonymous",
          _id: comment.commentary?.commentaryId || Math.random().toString(),
          isLiked: comment.isLiked ?? comment.liked ?? false,
          likes: comment.likes ?? comment.commentary?.likes ?? 0,
        }));

        setComments(enriched);
      } catch (err) {
        console.error("❌ Erro ao buscar comentários:", err);
        setComments([]);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchComments();
    }
  }, [userId]);

  return (
    <FeedContainer>
      <FeedTitle>Feed</FeedTitle>
      <FeedSubtitle>
        Here you can see what people are thinking about the most popular books
        of the moment
      </FeedSubtitle>
      {loading ? (
        <Spinner text="Loading comments..." />
      ) : comments.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888", marginTop: 32 }}>
          There are no comments yet.
        </p>
      ) : (
        comments.map((comment: any) => (
          <FeedCard key={comment._id} comment={comment} />
        ))
      )}
    </FeedContainer>
  );
};
