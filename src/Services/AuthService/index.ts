const API_URL = import.meta.env.VITE_API_URL;

export async function register(data: {
  username: string;
  email: string;
  password: string;
  userPhoto: string;
}) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Erro no cadastro.");
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
}

export async function login(credentials: { email: string; password: string }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer login");
  }

  return response.json();
}
