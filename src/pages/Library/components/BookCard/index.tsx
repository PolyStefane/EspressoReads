// pages/Library/components/BookCard.tsx

import React from "react";
import { Book } from "../../types/Book";
import { BookCover } from "../BookCover";
import {
  ActionButton,
  AuthorText,
  BookInfo,
  Overlay,
  StyledCard,
  TitleText,
} from "./styles";
import { useNavigate } from "react-router-dom";

type Props = {
  book: Book;
  onDelete?: (id: string) => void;
  onOpen?: (book: Book) => void;
};

export const BookCard: React.FC<Props> = ({ book, onDelete }) => {
  const navigate = useNavigate();

  return (
    <StyledCard>
      <div style={{ position: "relative" }}>
        <BookCover coverUrl={book.coverUrl} title={book.title} />
        <Overlay className="overlay">
          <ActionButton
            onClick={() => {
              console.log("Abrindo livro:", book);
              console.log("ID:", book.bookId);
              navigate(`/book/${book.bookId}`);
            }}
          >
            Open
          </ActionButton>
          <ActionButton onClick={() => onDelete?.(book.bookId)}>
            Delete
          </ActionButton>
        </Overlay>
      </div>
      <BookInfo>
        <TitleText>{book.title}</TitleText>
        <AuthorText>{book.author}</AuthorText>
      </BookInfo>
    </StyledCard>
  );
};
