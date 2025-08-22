import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";

interface IParams {
  query: string;
  page?: string;
}

export const useSearch = () => {
  const getMovieBySearch = (params: IParams) =>
    useQuery({
      queryKey: ["search-key", params],
      queryFn: () => API.get("/search/movie", { params }),
      select: (data) => data.data,
      enabled: !!params.query,
    });

  return { getMovieBySearch };
};
