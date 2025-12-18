import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  // Get token from localStorage 'user' object
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const token = storedUser.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // If sending FormData, remove Content-Type to let browser set it
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  return config;
});

export default api;