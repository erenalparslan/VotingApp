import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo-client";

const Stack = createStackNavigator();

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </ApolloProvider>
  );
}
