import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";
interface IParams {
  page?: string;
  with_genres?: string;
  sort_by?: string;
  "release_date.gte"?: string;
  "release_date.lte"?: string;
}

export const useMovies = () => {
  const getMovies = (params?: IParams) =>
    useQuery({
      queryKey: ["movie-key", params],
      queryFn: () =>
        API.get("/discover/movie", {
          params,
        }),
      select: (data) => data.data,
      gcTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 15,
    });

  const getMovieById = <T>(id?: string) =>
    useQuery({
      queryKey: ["movie-key", id],
      queryFn: () => API.get<T>(`/movie/${id}`),
      select: (data) => data.data,
    });

  const getMovieItem = <T>(id: string | undefined, path: string) =>
    useQuery({
      queryKey: ["movie-key", id, path],
      queryFn: () => API.get<T>(`/movie/${id}/${path}`),
      select: (data) => data.data,
    });

  return { getMovies, getMovieById, getMovieItem };
};
