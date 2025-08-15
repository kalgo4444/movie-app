import axios from "axios";

export const API = axios.create({ baseURL: "https://api.themoviedb.org/3" });

API.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjE0YzZjZmI5ZmI3Nzg0ZGVlNTRjZWNlMjJmOGM1MyIsIm5iZiI6MTc1NTE1NzA2MC40MjcsInN1YiI6IjY4OWQ5MjQ0NzRlMjQwYzNiYTZkODA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AtY19OTOcdBIRAGtvux8LUFDYmFymjoVYBiR4NifIsM";

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
