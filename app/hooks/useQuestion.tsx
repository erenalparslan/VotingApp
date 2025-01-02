// src/hooks/useUsers.ts
import { useQuery, useSubscription } from "@apollo/client";
import { GET_QUESTIONS } from "../graphql/queries";

export const useQuestion = () => {
  const { data, loading, error } = useSubscription(GET_QUESTIONS);

  return {
    questions: data?.questions || [],
    loading,
    error,
  };
};
