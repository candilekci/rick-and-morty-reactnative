import { StyleSheet } from "react-native";
import { screenWidth } from "../../Style/Style";
const styles = StyleSheet.create({
  searchBarInput: {
    width: screenWidth - 20,
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    alignSelf: "center",
    fontSize: 20,
  },
  searchButton: {
    width: 200,
    height: 50,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    alignSelf: "flex-end",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  searchButtonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default styles;
