import { Dimensions, StyleSheet } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerItems: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
