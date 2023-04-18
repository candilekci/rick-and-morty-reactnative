import { StyleSheet } from "react-native";
import { screenWidth } from "../../Style/Style";
const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  infoContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  characterImage: {
    width: 250,
    height: 230,
  },
  characterHeader: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  characterInfo: {
    padding: 10,
    borderTopWidth: 1,
    borderBottomColor: "grey",
    marginTop: 15,
  },
  InfoText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
    color: "#0A0D48",
  },
  favButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 200,
    backgroundColor: "#006B76",
    borderRadius: 10,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  favButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
export default style;
