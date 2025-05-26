// External Libraries
import React, { useEffect, useState } from "react";

// Components
import { Sidebar } from "../../components/Sidebar";
import { BookCover } from "./components/BookCover";

// Services
import { fetchWithAuth } from "../../Services/api";

// Styles
import {
  Title,
  MainContent,
  PageContainer,
  BookGrid,
  BookCard,
  BookInfo,
  TitleText,
  AuthorText,
} from "./styles";

type Book = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  startDate: string;
  endDate: string;
  review: string;
  favoriteCharacter: string;
  rating: number;
  coverUrl: string;
  numberPages: string;
  readingStatus: string;
  isFavorite: boolean;
  physical: boolean;
  digital: boolean;
};

export const Library: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const userId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      console.error("User ID não encontrado.");
      return;
    }

    fetchWithAuth(`https://books-social.onrender.com/api/v1/book/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Dados recebidos da API:", data);
        setBooks(data.books);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Title>Welcome to your Library</Title>

        {loading ? (
          <p>📚 Carregando seus livros...</p>
        ) : (
          <BookGrid>
            {books.map((book) => (
              <BookCard key={book._id}>
                <BookCover coverUrl={book.coverUrl} title={book.title} />

                <BookInfo>
                  <TitleText>{book.title}</TitleText>
                  <AuthorText>{book.author}</AuthorText>
                </BookInfo>
              </BookCard>
            ))}
          </BookGrid>
        )}
      </MainContent>
    </PageContainer>
  );
};
