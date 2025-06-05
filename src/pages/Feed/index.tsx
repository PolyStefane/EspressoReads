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
  const [loading, setLoading] = useState(true);

  const page = 0;
  const size = 20;

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const res = await fetchWithAuth(
          `https://books-social.onrender.com/api/v1/commentary/random/${page}/${size}`
        );
        const data = await res.json();
        console.log("API:", data.comments);

        const enriched = (data.comments || []).map((comment: any) => ({
          ...comment,
          commentaryText:
            comment.commentary?.commentaryText || "Comentário sem texto.",
          progress: comment.commentary?.progress ?? 0,
          reaction: comment.commentary?.reaction,
          bookTitle: comment.book?.title || "Título desconhecido",
          bookAuthor: comment.book?.author || "Autor desconhecido",
          bookCoverUrl:
            comment.book?.coverUrl ||
            "https://m.media-amazon.com/images/I/71fEYN72-UL._SY466_.jpg",
          username: comment.username || "Anônimo",
          _id: comment.commentary?.commentaryId || Math.random().toString(), // para key única
        }));

        setComments(enriched);
      } catch (err) {
        console.error("❌ Erro ao buscar comentários:", err);
        setComments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  return (
    <FeedContainer>
      <FeedTitle>Feed</FeedTitle>
      {loading ? (
        <p style={{ textAlign: "center", color: "#888", marginTop: 32 }}>
          Carregando comentários...
        </p>
      ) : comments.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888", marginTop: 32 }}>
          Não há comentários para exibir ainda.
        </p>
      ) : (
        comments.map((comment: any) => (
          <FeedCard key={comment._id} comment={comment} />
        ))
      )}
    </FeedContainer>
  );
};
