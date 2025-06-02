// External libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { BookCover } from "../BookCover";

//Types
import { Book } from "../../types/Book";

// Styles
import {
  ActionButton,
  AuthorText,
  BookInfo,
  Overlay,
  StyledCard,
  TitleText,
} from "./styles";
import { fetchWithAuth } from "../../../../Services/api";
import { ConfirmDeleteModal } from "../ConfirmDeleteModal";

type Props = {
  book: Book;
  onDelete?: (id: string) => void;
  onOpen?: (book: Book) => void;
};

export const BookCard: React.FC<Props> = ({ book, onDelete }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetchWithAuth(
        `https://books-social.onrender.com/api/v1/book/delete/${book.bookId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao deletar o livro");
      }

      console.log("Livro deletado com sucesso:", book.bookId);
      onDelete?.(book.bookId);
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    } finally {
      setShowModal(false);
    }
  };

  const openModal = () => setShowModal(true);
  const cancelDelete = () => setShowModal(false);

  return (
    <>
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
            <ActionButton onClick={openModal}>Delete</ActionButton>
          </Overlay>
        </div>
        <BookInfo>
          <TitleText>{book.title}</TitleText>
          <AuthorText>{book.author}</AuthorText>
        </BookInfo>
      </StyledCard>
      {showModal && (
        <ConfirmDeleteModal onConfirm={handleDelete} onCancel={cancelDelete} />
      )}
    </>
  );
};
