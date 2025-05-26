// External Libraries
import React from "react";

// Components
import { BookCard } from "./components/BookCard";
import { Sidebar } from "../../components/Sidebar";

// Hooks
import { useBooks } from "./hooks/useBooks";

// Styles
import { Title, MainContent, PageContainer, BookGrid } from "./styles";

export const Library: React.FC = () => {
  const { books, loading } = useBooks();

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
              <BookCard key={book._id} book={book} />
            ))}
          </BookGrid>
        )}
      </MainContent>
    </PageContainer>
  );
};
