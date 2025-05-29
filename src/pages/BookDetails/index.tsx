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
  Container,
  FormContainer,
  FormSection,
  LeftContainer,
  RightContainer,
  Title,
  Field,
  Label,
  DateContainer,
  CoverImage,
  Stars,
  HeartIcon,
  IconGroup,
  Tag,
  StatusRow,
  Buttons,
  Row,
} from "./styles";
import { CommentModal } from "./components/CommentModal";

export const BookDetails: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchWithAuth(`https://books-social.onrender.com/api/v1/book/find/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const book = {
          ...data.book,
          physical: data.book.bookTypes?.includes("PHYSICAL"),
          digital: data.book.bookTypes?.includes("DIGITAL"),
        };
        setBook(book);
      })
      .catch(console.error);
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <Container>
      <FormContainer>
        <Title>{book.title}</Title>
        <FormSection>
          {/* LADO ESQUERDO */}
          <LeftContainer>
            <Field>
              <Label>Author</Label>
              <span>{book.author}</span>
            </Field>

            <Field>
              <Label>Genre</Label>
              <span>{book.genre}</span>
            </Field>

            <DateContainer>
              <Field>
                <Label>Start Date</Label>
                <span>{book.startDate}</span>
              </Field>

              <Field>
                <Label>End Date</Label>
                <span>{book.endDate}</span>
              </Field>
            </DateContainer>

            <Field>
              <Label>Review</Label>
              <span>{book.review}</span>
            </Field>

            <Field>
              <Label>Favorite Character</Label>
              <span>{book.favoriteCharacter}</span>
            </Field>

            <StatusRow>
              {book.isFavorite && <Tag color="#FDE9FF">💜 Favorites</Tag>}
              <Tag color="#DDF6D0">{book.readingStatus}</Tag>
            </StatusRow>
          </LeftContainer>

          {/* LADO DIREITO */}
          <RightContainer>
            <CoverImage>
              <img src={book.coverUrl} alt={book.title} />
            </CoverImage>

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
            <Row>
              <Field>
                <Label>Format</Label>
                <span>
                  {book.physical && "Physical"}
                  {book.physical && book.digital && " and "}
                  {book.digital && "Digital"}
                </span>
              </Field>

              <Field>
                <Label>Pages</Label>
                <span>{book.numberPages}</span>
              </Field>
            </Row>

            <Buttons>
              <button onClick={() => setIsModalOpen(true)}>Add Comment</button>
              <button>Comment History</button>
              <button>Update</button>
            </Buttons>
          </RightContainer>
        </FormSection>
      </FormContainer>
      {isModalOpen && <CommentModal onClose={() => setIsModalOpen(false)} />}
    </Container>
  );
};
