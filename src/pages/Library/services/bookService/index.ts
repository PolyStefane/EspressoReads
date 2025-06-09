// Services
import { fetchWithAuth } from "../../../../Services/api";

//Types
import { Book } from "../../types/Book";

export const fetchBooks = async (userId: string): Promise<Book[]> => {
  const res = await fetchWithAuth(
    `https://books-social-g338.onrender.com/api/v1/book/${userId}`
  );
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);

  const data = await res.json();
  return data.books ?? [];
};
