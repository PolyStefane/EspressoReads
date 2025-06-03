// External libraries
import { FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { useParams } from "react-router-dom";

// Components
import { CommentModal } from "./components/CommentModal";
import { CommentHistoryModal } from "./components/CommentHistoryModal";

// Services
import { fetchWithAuth } from "../../Services/api";

// Types
import { Book } from "../Library/types/Book";

// Styles
import {
  Row,
  Title,
  Field,
  Label,
  Stars,
  Buttons,
  HeartIcon,
  Container,
  StatusRow,
  IconGroup,
  CoverImage,
  FormSection,
  DateContainer,
  FormContainer,
  LeftContainer,
  RightContainer,
} from "./styles";
import { StatusTag } from "./components/StatusTag";
import { FilterType } from "../../components/Tag";

export const BookDetails: React.FC = () => {
  const { id: bookId } = useParams();
  const [comments, setComments] = useState([]);
  const [book, setBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  // const navigate = useNavigate();

  const userId = localStorage.getItem("userId") ?? "";
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchWithAuth(
      `https://books-social.onrender.com/api/v1/book/find/${bookId}`
    )
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
  }, [bookId]);

  if (!book) return <p>Loading...</p>;

  const fetchComments = async () => {
    setLoadingComments(true);
    try {
      const res = await fetchWithAuth(
        `https://books-social.onrender.com/api/v1/commentary/${bookId}`
      );

      if (!res.ok) {
        throw new Error("Erro na requisição");
      }

      let data;
      try {
        data = await res.json();
      } catch (e) {
        const fallbackText = await res.text();
        console.error("Resposta não parseável como JSON:", fallbackText);
        throw new Error("Resposta não é JSON");
      }

      console.log("✅ Comentários:", data);

      setComments(data.comments || []);
      setShowHistory(true);
    } catch (err) {
      console.error("Erro ao buscar comentários:", err);
    } finally {
      setLoadingComments(false);
    }
  };

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
              {book.isFavorite && <StatusTag type="FAVORITES" />}
              {book.readingStatus && (
                <StatusTag type={book.readingStatus as FilterType} />
              )}
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
              <button
                onClick={() => {
                  setShowHistory(true);
                  fetchComments();
                }}
              >
                Comment History
              </button>
              {/* <button onClick={() => navigate(`/books/edit/${book.bookId}`)}>
                Edit Book
              </button>{" "} */}
            </Buttons>
          </RightContainer>
        </FormSection>
      </FormContainer>

      {isModalOpen && userId && (
        <CommentModal
          onClose={() => setIsModalOpen(false)}
          bookId={bookId!}
          userId={userId}
        />
      )}

      {showHistory && (
        <CommentHistoryModal
          bookId={bookId!}
          comments={comments}
          loading={loadingComments}
          onClose={() => setShowHistory(false)}
        />
      )}
    </Container>
  );
};
