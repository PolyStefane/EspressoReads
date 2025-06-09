export const saveBook = async (payload: any) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://books-social-g338.onrender.com/api/v1/book",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const error: any = new Error("Erro ao salvar livro");
    error.status = response.status;
    error.detail = errorBody?.detail || "";
    throw error;
  }

  const responseText = await response.text();
  return responseText ? JSON.parse(responseText) : null;
};
