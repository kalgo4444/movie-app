import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";
import type { IPerson } from '../../../shared/types'

export const usePeopleAPI = () => {
  const getPeopleById = (id: string | undefined) =>
    useQuery({
      queryKey: ["people-key", id],
      queryFn: () => API.get<IPerson>(`/person/${id}`),
      select: (data) => data.data,
    });

  return { getPeopleById };
};
