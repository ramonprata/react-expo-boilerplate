import { useEffect, useState } from "react";
import homeManager from "../services";
import { IStep } from "../types/IStep";

export const useHomeDataSteps = () => {
  // This hook can be used to manage home steps logic
  // For example, fetching steps from a repository or managing state

  const [steps, setSteps] = useState<IStep[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        setLoading(true);
        const fetchedSteps = await homeManager.getHomeSteps();
        setSteps(fetchedSteps);
      } catch (error) {
        //   notify user
      } finally {
        setLoading(false);
      }
    };

    fetchSteps();
  }, []);

  // Placeholder for future implementation
  return {
    steps,
    loading,
  };
};
