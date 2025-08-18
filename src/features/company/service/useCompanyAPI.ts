import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";
import type { ICompanyDetail } from "../types";

export const useCompanyAPI = () => {
  const getCompanyById = (id: string | undefined) =>
    useQuery({
      queryKey: ["company-key", id],
      queryFn: () => API.get<ICompanyDetail>(`/company/${id}`),
      select: (data) => data.data,
    });

  return { getCompanyById };
};
