import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";

interface IParams {
  page?: number;
}

export const useMovies = () => {
  const getMovies = (params?: IParams) =>
    useQuery({
      queryKey: ["movie-key", params],
      queryFn: () => API.get("/discover/movie"),
      select: (data) => data.data,
    });

  const getMoviesByUrl = (url: string, params?: IParams) =>
    useQuery({
      queryKey: ["movie-key-by-url", params],
      queryFn: () => API.get(url),
      select: (data) => data.data,
    });

  const getMovieById = (id: number) =>
    useQuery({
      queryKey: ["movie-key", id],
      queryFn: () => API.get(`/movie/${id}`),
      select: (data) => data.data,
    });
  return { getMovies, getMovieById, getMoviesByUrl };
};
