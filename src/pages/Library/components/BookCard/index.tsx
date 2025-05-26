// External Libraries
import React from "react";

// Components
import { BookCover } from "../BookCover";

// Types
import { Book } from "../../types/Book";

// Styles
import { StyledCard, AuthorText, BookInfo, TitleText } from "./styles";

type Props = {
  book: Book;
};

export const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <StyledCard>
      <BookCover coverUrl={book.coverUrl} title={book.title} />
      <BookInfo>
        <TitleText>{book.title}</TitleText>
        <AuthorText>{book.author}</AuthorText>
      </BookInfo>
    </StyledCard>
  );
};
