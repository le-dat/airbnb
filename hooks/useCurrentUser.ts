import useSWR from "swr";

import { getData } from "@/utils/httpRequest";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/currentUser", getData);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
