import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";
import type { IMovieDetail } from "../types";
interface IParams {
  page?: number;
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
    });

  const getMovieById = (id?: string) =>
    useQuery({
      queryKey: ["movie-key-by-id"],
      queryFn: () => API.get<IMovieDetail>(`/movie/${id}`),
      select: (data) => data.data,
    });
  return { getMovies, getMovieById };
};
