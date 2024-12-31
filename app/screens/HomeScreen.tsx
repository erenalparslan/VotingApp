
import React from 'react'
import { View, Text, ActivityIndicator, FlatList, StyleSheet,TouchableOpacity } from "react-native";
import { useQuestion } from "../hooks/useQuestion";

export default function HomeScreen() {
    const { questions, loading, error } = useQuestion();

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text style={styles.errorText}>Hata: {error.message}</Text>;
    return (
        <View style={styles.container}>
        <FlatList
          data={questions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.question}>{item.text}</Text>
              {item.options.map((option, index) => (
                <TouchableOpacity key={index} >
                  <Text style={styles.option}>{option.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />
      </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f7f7f7',
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    question: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    option: {
      backgroundColor: '#f1f1f1',
      padding: 12,
      marginBottom: 8,
      borderRadius: 8,
    },
    optionText: {
      fontSize: 16,
      color: '#333',
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
        marginTop: 20,}
  });


 