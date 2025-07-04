// External libraries
import { toast } from "sonner";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { BookCover } from "../BookCover";
import { ConfirmDeleteModal } from "../ConfirmDeleteModal";

// Services
import { fetchWithAuth } from "../../../../Services/api";

//Types
import { Book } from "../../types/Book";

// Styles
import {
  Overlay,
  BookInfo,
  TitleText,
  AuthorText,
  StyledCard,
  ActionButton,
} from "./styles";

type Props = {
  book: Book;
  onDelete?: (id: string) => void;
  onOpen?: (book: Book) => void;
};

const apiUrl = import.meta.env.VITE_API_URL;

export const BookCard: React.FC<Props> = ({ book, onDelete }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetchWithAuth(
        `${apiUrl}/api/v1/book/delete/${book.bookId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the book");
      }

      toast.success(`"${book.title}" was successfully deleted.`);
      onDelete?.(book.bookId);
    } catch (error) {
      console.error("Failed to delete book:", error);
      toast.error("Something went wrong while deleting the book.");
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
