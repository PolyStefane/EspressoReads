// External libraries
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { useParams } from "react-router-dom";

// Services
import { fetchWithAuth } from "../../Services/api";

// Types
import { Book } from "../Library/types/Book";

// Styles
import {
  Tag,
  Label,
  Field,
  Title,
  Stars,
  Buttons,
  StatusRow,
  IconGroup,
  HeartIcon,
  BookPanel,
  CoverImage,
  MainContent,
} from "./styles";

export const BookDetails: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetchWithAuth(`https://books-social.onrender.com/api/v1/book/find/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data.book))
      .catch(console.error);
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <MainContent>
      <BookPanel>
        <div style={{ flex: 1 }}>
          <Title>{book.title}</Title>

          <Field>
            <Label>Author</Label>
            <span>{book.author}</span>
          </Field>

          <Field>
            <Label>Genre</Label>
            <span>{book.genre}</span>
          </Field>

          <Field>
            <Label>Start Date</Label>
            <span>{book.startDate}</span>
          </Field>

          <Field>
            <Label>End Date</Label>
            <span>{book.endDate}</span>
          </Field>

          <Field>
            <Label>Review</Label>
            <span>{book.review}</span>
          </Field>

          <Field>
            <Label>Favorite Character</Label>
            <span>{book.favoriteCharacter}</span>
          </Field>

          <StatusRow>
            {book.readingStatus === "Read" && (
              <Tag color="#d4f7dc">✅ Read</Tag>
            )}
            {book.isFavorite && <Tag color="#FDE9FF">💜 Favorites</Tag>}
          </StatusRow>

          <Field>
            <Label>Pages</Label>
            <span>{book.numberPages}</span>
          </Field>

          <Field>
            <Label>Format</Label>
            <div>
              {book.physical && <Tag color="#e1fce2">📕 Physical</Tag>}
              {book.digital && <Tag color="#e1f0ff">📱 Digital</Tag>}
            </div>
          </Field>

          <Field>
            <Label>Status</Label>
            <Tag color="#e7f3ff">{book.readingStatus}</Tag>
          </Field>

          <Buttons>
            <button>Comment History</button>
            <button>Update</button>
          </Buttons>
        </div>

        <CoverImage>
          <img src={book.coverUrl} alt={book.title} />
          <IconGroup>
            <Stars>
              {[...Array(book.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Stars>
            {book.isFavorite && (
              <HeartIcon>
                <MdFavorite />
              </HeartIcon>
            )}
          </IconGroup>
        </CoverImage>
      </BookPanel>
    </MainContent>
  );
};
