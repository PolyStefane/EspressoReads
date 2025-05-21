// External Libraries
import React, { useEffect, useState } from "react";

// Components
import { Sidebar } from "../../components/Sidebar";

// Services
import { fetchWithAuth } from "../../Services/api";

// Styles
import { Title, MainContent, PageContainer } from "./styles";

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

  useEffect(() => {
    fetchWithAuth("https://books-social.onrender.com/api/v1/book")
      .then((res) => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error.message);
      });
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Title>Welcome to your Library</Title>

        {books.length === 0 ? (
          <p>Loading books...</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book._id}>
                <strong>{book.title}</strong> — {book.author}
              </li>
            ))}
          </ul>
        )}
      </MainContent>
    </PageContainer>
  );
};
