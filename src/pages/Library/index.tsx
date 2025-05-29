// External libraries
import React from "react";

// Components
import { BookCard } from "./components/BookCard";

// Hooks
import { useBooks } from "./hooks/useBooks";

// Styles
import { Title, MainContent, BookGrid } from "./styles";

export const Library: React.FC = () => {
  const { books, setBooks, loading } = useBooks();

  const handleDelete = (bookId: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.bookId !== bookId));
  };

  return (
    <MainContent>
      <Title>Welcome to your Library</Title>
      {loading ? (
        <p>📚 Loading your books...</p>
      ) : (
        <BookGrid>
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} onDelete={handleDelete} />
          ))}
        </BookGrid>
      )}
    </MainContent>
  );
};
