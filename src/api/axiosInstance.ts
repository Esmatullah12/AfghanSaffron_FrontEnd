import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const token = storedUser.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const language = localStorage.getItem("language") || "en";
  config.headers["Accept-Language"] = language;

  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  return config;
});

export default api;