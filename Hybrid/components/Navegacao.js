import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstPage from "./FirstPage";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import NewService from "./NewService";
import CameraPage from "./CameraPage";

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {},
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name=" "
          component={FirstPage}
          screenOptions={{
            headerStyle: { backgroundColor: "#fff" },
          }}
        />
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{
            title: "TALK TO ME",
            headerTintColor: "#383838",
          }}
        />
        <Stack.Screen
          name="registerPage"
          component={RegisterPage}
          options={{
            title: "TALK TO ME",
            headerTintColor: "#383838",
          }}
        />
        <Stack.Screen
          name="newService"
          component={NewService}
          options={{
            title: "NOVO ATENDIMENTO",
            headerTintColor: "#383838",
          }}
        />
        <Stack.Screen
          name="camera"
          component={CameraPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
}
