import { StyleSheet } from "react-native";
import { screenWidth } from "../../Style/Style";
const style = StyleSheet.create({
  cardContainer: {
    width: screenWidth - 20,
    height: 100,
    backgroundColor: "white",
    alignSelf: "center",
    marginVertical: 7,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardImage: {
    width: 100,
    height: 80,
    borderRadius: 5,
  },
  cardHeaderText: {
    fontSize: 20,
  },
  closeButton: {
    fontSize: 25,
    marginRight: 5,
  },
});
export default style;
