import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigation } from "./src/Navigation/Stack";
import GetEpisode from "./src/Axios/Axios";
import { Provider } from "react-redux";
import store from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
