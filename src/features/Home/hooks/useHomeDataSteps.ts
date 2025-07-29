import homeManager from "../services";

import { useQuery } from "@tanstack/react-query";

export const useHomeDataSteps = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["home-get-steps"],
    queryFn: () => homeManager.getHomeSteps(),
  });

  return {
    steps: data,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
