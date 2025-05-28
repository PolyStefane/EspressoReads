import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../Services/api";
import { Book } from "../Library/types/Book";
import {
  Wrapper,
  Sidebar,
  MainContent,
  BookPanel,
  CoverImage,
  Field,
  Label,
  Highlight,
  Tag,
  StatusRow,
  Buttons,
  IconGroup,
  HeartIcon,
  Stars,
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
    <Wrapper>
      <MainContent>
        <BookPanel>
          <div style={{ flex: 1 }}>
            <h1>Book #{book.bookId}</h1>

            <Field>
              <Label>Title</Label>
              <Highlight>{book.title}</Highlight>
            </Field>

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
              {book.isFavorite && <Tag color="#f4d1f7">💜 Favorites</Tag>}
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
                  <span key={i}>⭐</span>
                ))}
              </Stars>
              {book.isFavorite && <HeartIcon>💜</HeartIcon>}
            </IconGroup>
          </CoverImage>
        </BookPanel>
      </MainContent>
    </Wrapper>
  );
};
