import React, { useEffect, useState } from "react";
import {
  Container,
  UserName,
  ProfilePic,
  StatsWrapper,
  StatBox,
  StatTitle,
  StatValue,
  StatLabel,
  BooksWrapper,
  BookBox,
  BookTitle,
  BookName,
  BookAuthor,
  BookImage,
  BookPages,
} from "./styles";
import { fetchWithAuth } from "../../Services/api";

interface Book {
  title: string;
  author: string;
  numberPages: number;
  coverUrl: string;
}

interface Statistics {
  totalPages: number;
  totalBooks: number;
  mostReadGenre: string;
  longestReadBook: Book | null;
  shortestReadBook: Book | null;
}

const apiUrl = import.meta.env.VITE_API_URL;

const Profile: React.FC = () => {
  const [stats, setStats] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const res = await fetchWithAuth(
          `${apiUrl}/api/v1/statistics/${userId}`
        );
        if (!res.ok) throw new Error("Erro ao buscar estatísticas");
        const data = await res.json();

        const longest =
          data.longestReadBook && data.longestReadBook.title
            ? data.longestReadBook
            : null;

        const shortest =
          data.shortestReadBook && data.shortestReadBook.title
            ? data.shortestReadBook
            : null;

        setStats({
          totalPages: data.readPages,
          totalBooks: data.totalRead,
          mostReadGenre: data.mostReadGenre,
          longestReadBook: longest,
          shortestReadBook: shortest,
        });
      } catch (err: any) {
        setError(err.message || "Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [userId]);

  if (loading) return <p>Carregando estatísticas...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!stats) return <p>Dados não disponíveis.</p>;

  const renderBook = (book: Book | null, label: string) => (
    <BookBox>
      <BookTitle>{label}</BookTitle>
      <BookName>{book?.title || "Livro indisponível"}</BookName>
      <BookAuthor>{book?.author || "Desconhecido"}</BookAuthor>
      <BookImage
        src={book?.coverUrl || "/img/coverDefault.svg.png"}
        alt={book?.title || "sem imagem"}
      />
      <BookPages>{book?.numberPages || 0} pages</BookPages>
    </BookBox>
  );

  return (
    <Container>
      <UserName>user_name</UserName>

      <ProfilePic>
        <img src="/img/user.png" alt="Profile" />
      </ProfilePic>

      <StatsWrapper>
        <StatBox>
          <StatTitle>Read Pages</StatTitle>
          <StatValue>{stats.totalPages}</StatValue>
          <StatLabel>Pages</StatLabel>
        </StatBox>
        <StatBox>
          <StatTitle>Most Read Genre</StatTitle>
          <StatValue>{stats.mostReadGenre}</StatValue>
        </StatBox>
        <StatBox>
          <StatTitle>Total read</StatTitle>
          <StatValue>{stats.totalBooks}</StatValue>
          <StatLabel>Books</StatLabel>
        </StatBox>
      </StatsWrapper>

      <BooksWrapper>
        {renderBook(stats.longestReadBook, "Longest Read Book")}
        {renderBook(stats.shortestReadBook, "Shortest Read Book")}
      </BooksWrapper>
    </Container>
  );
};

export default Profile;
