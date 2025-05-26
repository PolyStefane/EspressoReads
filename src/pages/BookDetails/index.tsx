import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../Services/api";
import { Book } from "../Library/types/Book";
import { Sidebar } from "../../components/Sidebar";

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
    <div style={{ display: "flex" }}>
      <Sidebar />
      {/* layout */}
      <div style={{ padding: "2rem" }}>
        <h1>{book.title}</h1>
      </div>
    </div>
  );
};
