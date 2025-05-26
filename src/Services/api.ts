export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = localStorage.getItem("token");

  const headers = {
    ...(options.headers || {}),
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const finalOptions: RequestInit = {
    ...options,
    headers,
  };

  return fetch(url, finalOptions);
};
