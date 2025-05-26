export const saveBook = async (payload: any) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://books-social.onrender.com/api/v1/book",
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
    const errorText = await response.text();
    throw new Error(`Request failed: ${response.status} - ${errorText}`);
  }

  const responseText = await response.text();
  return responseText ? JSON.parse(responseText) : null;
};
