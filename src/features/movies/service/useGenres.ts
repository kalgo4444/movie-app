import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";

interface IParams {
  language: string;
}

export const useGenres = () => {
  const getGenres = (params?: IParams) =>
    useQuery({
      queryKey: ["movie-genre"],
      queryFn: () => API.get("/genre/movie/list", { params }),
      select: (data) => data.data,
    });

  return { getGenres };
};
