import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo-client";
import AddButton from "./components/AddButton";
import Router from "./Router";
import { NativeBaseProvider } from "native-base";

const Stack = createStackNavigator();

export default function Page() {
  return (
    <NativeBaseProvider>
      {" "}
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>{" "}
    </NativeBaseProvider>
  );
}
