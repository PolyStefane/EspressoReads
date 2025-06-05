// External libraries
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

// Components
import { BookCard } from "./components/BookCard";
import { FilterTag, FilterType } from "../../components/Tag";

// Hooks
import { useBooks } from "./hooks/useBooks";

// Styles
import {
  Title,
  BookGrid,
  MainContent,
  SearchInput,
  SearchWrapper,
  FilterContainer,
} from "./styles";
import { Spinner } from "../../components/Spinner";

export const Library: React.FC = () => {
  const { books, setBooks, loading } = useBooks();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<null | FilterType>(null);
  const handleFilterClick = (type: FilterType) => {
    setActiveFilter((prev) => (prev === type ? null : type));
  };
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      !activeFilter ||
      (activeFilter === "FAVORITES" && book.isFavorite) ||
      (activeFilter === "FINISHED" && book.readingStatus === "FINISHED") ||
      (activeFilter === "READING" && book.readingStatus === "READING") ||
      (activeFilter === "WISHLIST" && book.readingStatus === "WISHLIST");

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (bookId: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.bookId !== bookId));
  };

  return (
    <MainContent>
      <Title>Welcome to your Library</Title>

      {loading ? (
        <Spinner text="Loading your books..." />
      ) : books.length === 0 ? (
        <p>📭 No books found in your library. Try adding some!</p>
      ) : (
        <>
          <FilterContainer>
            <SearchWrapper>
              <FiSearch />
              <SearchInput
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </SearchWrapper>

            <FilterTag
              type="FAVORITES"
              active={activeFilter === "FAVORITES"}
              onClick={handleFilterClick}
            />
            <FilterTag
              type="FINISHED"
              active={activeFilter === "FINISHED"}
              onClick={handleFilterClick}
            />
            <FilterTag
              type="READING"
              active={activeFilter === "READING"}
              onClick={handleFilterClick}
            />
            <FilterTag
              type="WISHLIST"
              active={activeFilter === "WISHLIST"}
              onClick={handleFilterClick}
            />
          </FilterContainer>

          {filteredBooks.length === 0 ? (
            <p>🔍 No results match your search or selected filter.</p>
          ) : (
            <BookGrid>
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.bookId}
                  book={book}
                  onDelete={handleDelete}
                />
              ))}
            </BookGrid>
          )}
        </>
      )}
    </MainContent>
  );
};
