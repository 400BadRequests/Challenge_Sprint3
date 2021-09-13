import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstPage from "./FirstPage";
import HomePage from "./HomePage";
import LogsPage from "./LogsPageView";
import LogsDetails from "./LogsDetails";

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#55eca3",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="400 BR" component={FirstPage} />
        <Stack.Screen name="⚡" component={HomePage} />
        <Stack.Screen name="logs" component={LogsPage} />
        <Stack.Screen name="logsDetails" component={LogsDetails} />
      </Stack.Navigator>
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
}
