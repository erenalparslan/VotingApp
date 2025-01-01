// src/hooks/useUsers.ts
import { useQuery, useSubscription } from "@apollo/client";
import { GET_QUESTİONS } from "../graphql/queries";

export const useQuestion = () => {
  const { data, loading, error } = useSubscription(GET_QUESTİONS);

  return {
    questions: data?.questions || [],
    loading,
    error,
  };
};
