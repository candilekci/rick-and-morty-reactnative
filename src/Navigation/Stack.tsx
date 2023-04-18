import React from "react";
import TabNavigation from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EpisodeScreen from "../Screens/EpisodeScreen/EpisodeScreen";
import CharacterScreen from "../Screens/CharacterScreen/CharacterScreen";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={TabNavigation} />
        <Stack.Screen name="Favorite" component={TabNavigation} />
        <Stack.Screen name="Search" component={TabNavigation} />
        <Stack.Screen name="EpisodeScreen" component={EpisodeScreen} />
        <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { StackNavigation };
