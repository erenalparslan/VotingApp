import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/HomeScreen";
import DetailsScreen from "./screens/Details";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Questions" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Details" }}
      />
        <Stack.Screen
        name="Login"
        component={Login}
      />

<Stack.Screen
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

export default Router;
