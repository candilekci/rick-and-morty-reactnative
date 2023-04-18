import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import FavoriteScreen from "../Screens/FavoriteScreen/FavoriteScreen";
import SearchScreen from "../Screens/SearchScreen/SearchScreen";
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let colorName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            colorName = focused ? "#2D5AA7" : "#fff";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart-sharp" : "heart-outline";
            colorName = focused ? "#2D5AA7" : "#fff";
          } else if (route.name === "Search") {
            iconName = focused ? "search-sharp" : "search-outline";
            colorName = focused ? "#2D5AA7" : "#fff";
          }
          return <Ionicons name={iconName!} size={30} color={"white"} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: "#748DB7",
        tabBarInactiveBackgroundColor: "#5B7FBB",
        tabBarStyle: { height: 60 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}
