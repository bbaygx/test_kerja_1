import { DataListAPI } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export function useFetchDataList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dataList"],
    queryFn: DataListAPI,
  });

  return { data, isLoading, isError };
}
