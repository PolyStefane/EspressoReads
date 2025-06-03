// External libraries
import React, { useEffect, useState } from "react";

// Components
import { FeedCard } from "./components/FeedCard";

// Services
import { fetchWithAuth } from "../../Services/api";

// Styles
import { FeedContainer, FeedTitle } from "./styles";

export const Feed: React.FC = () => {
  const [comments, setComments] = useState([]);

  const mockBookId = "f662f822-8a45-405f-aa63-38405a206e7f";

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetchWithAuth(
          `https://books-social.onrender.com/api/v1/commentary/${mockBookId}`
        );
        const data = await res.json();

        console.log("📥 Comentários recebidos:", data.comments);

        const enriched = (data.comments || []).map((comment: any) => {
          console.log("🔍 Comentário real:", comment);

          return {
            ...comment,
            text:
              comment.commentaryText ||
              "Comentário mockado — texto não veio da API.",
            bookTitle: "Título mockado",
            bookAuthor: "Autor mockado",
            bookCoverUrl:
              "https://m.media-amazon.com/images/I/71fEYN72-UL._SY466_.jpg",
          };
        });

        setComments(enriched);
      } catch (err) {
        console.error("❌ Erro ao buscar comentários:", err);
      }
    };

    fetchComments();
  }, []);

  return (
    <FeedContainer>
      <FeedTitle>Feed</FeedTitle>
      {comments.map((comment: any) => (
        <FeedCard key={comment._id} comment={comment} />
      ))}
    </FeedContainer>
  );
};
