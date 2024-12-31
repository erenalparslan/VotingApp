// src/hooks/useUsers.ts
import { useQuery } from "@apollo/client";
import { GET_QUESTİONS } from "../graphql/queries";

export const useQuestion = () => {
  const { data, loading, error } = useQuery(GET_QUESTİONS);

  return {
    questions: data?.questions || [],
    loading,
    error,
  };
};
