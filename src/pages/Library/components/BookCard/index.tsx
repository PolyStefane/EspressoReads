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

type Props = {
  book: Book;
  onDelete?: (id: string) => void;
  onOpen?: (book: Book) => void;
};

export const BookCard: React.FC<Props> = ({ book, onDelete, onOpen }) => {
  return (
    <StyledCard>
      <div style={{ position: "relative" }}>
        <BookCover coverUrl={book.coverUrl} title={book.title} />
        <Overlay className="overlay">
          <ActionButton onClick={() => onOpen?.(book)}>Open</ActionButton>
          <ActionButton onClick={() => onDelete?.(book._id)}>
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
