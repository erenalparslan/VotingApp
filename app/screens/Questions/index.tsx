import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useQuestion } from "../../hooks/useQuestion";
import List from "./List";
import EmptyList from "@/app/components/EmptyList";

export default function Questions() {
  const { questions, error, loading } = useQuestion();

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  console.log("data", questions);
  return (
    <>{questions.length > 0 ? <List data={questions} /> : <EmptyList message={"No surveys"} />}</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  option: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
