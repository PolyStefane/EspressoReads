import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../../Services/api";
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
  BookTextWrapper,
  StatsContainer,
} from "./styles";
import { Spinner } from "../../components/Spinner";

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
  const [username, setUsername] = useState("User");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUsername(storedName);
  }, []);

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
        setError(err.message || "Data Error");
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [userId]);

  if (loading) return <Spinner text="Loading profile..." />;
  if (error) return <p>Error: {error}</p>;
  if (!stats) return <p>Unavailable data</p>;

  const renderBook = (book: Book | null, label: string) => (
    <BookBox>
      <BookTextWrapper>
        <BookTitle>{label}</BookTitle>
        <BookName>{book?.title || "Book unavailable"}</BookName>
        <BookAuthor>{book?.author || "Unknown"}</BookAuthor>
        <BookPages>{book?.numberPages || 0} pages</BookPages>
      </BookTextWrapper>
      <BookImage
        src={book?.coverUrl || "/img/coverDefault.svg.png"}
        alt={book?.title || "no image"}
      />
    </BookBox>
  );

  return (
    <Container>
      <UserName>{username}</UserName>

      <ProfilePic>
        <img src="/img/user.png" alt="Profile" />
      </ProfilePic>
      <StatsContainer>
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
      </StatsContainer>
    </Container>
  );
};

export default Profile;
