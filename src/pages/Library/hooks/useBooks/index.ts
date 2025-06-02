import { useEffect, useState, useRef } from "react";
import { Book } from "../../types/Book";
import { fetchBooks } from "../../services/bookService";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false); // <-- controle de execução

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID não encontrado.");
      setLoading(false);
      return;
    }

    fetchBooks(userId)
      .then(setBooks)
      .catch((err) => {
        console.error("Erro ao buscar livros:", err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { books, setBooks, loading };
};
