import axios from "axios";
import { getAuthToken } from "@/lib/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Could trigger a logout flow
      console.warn("Unauthorized, redirecting to login");
    }
    return Promise.reject(error);
  }
);

export { api };
