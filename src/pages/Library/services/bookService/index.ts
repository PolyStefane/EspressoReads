// Services
import { fetchWithAuth } from "../../../../Services/api";

//Types
import { Book } from "../../types/Book";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchBooks = async (userId: string): Promise<Book[]> => {
  const res = await fetchWithAuth(`${apiUrl}/api/v1/book/${userId}`);
  if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);

  const data = await res.json();
  return data.books ?? [];
};
