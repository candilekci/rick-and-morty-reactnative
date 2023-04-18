import { StyleSheet } from "react-native";
import { screenWidth } from "../../Style/Style";
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 90,
    backgroundColor: "#5B7FBB",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 70,
    height: 50,
    marginBottom: 5,
  },
});
export default styles;
