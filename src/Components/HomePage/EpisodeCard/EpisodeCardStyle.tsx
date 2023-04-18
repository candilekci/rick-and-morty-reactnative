import { StyleSheet } from "react-native";
import { screenWidth } from "../../../Style/Style";

const style = StyleSheet.create({
  container: {
    width: screenWidth - 20,
    height: 120,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  Image: {
    width: 80,
    height: 70,
    marginRight: 10,
    borderRadius: 5,
  },
  episodeHeader: {
    fontSize: 15,
    fontWeight: "bold",
    width: screenWidth - 130,
  },
});
export default style;
