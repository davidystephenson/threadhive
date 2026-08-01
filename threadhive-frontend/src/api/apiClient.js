import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/api";
// const API_BASE_URL = "https://w04-mls.onrender.com/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token to every request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Unwrap the Axios envelope so callers receive the raw JSON body
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default apiClient;
