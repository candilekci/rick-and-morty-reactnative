import { StyleSheet } from "react-native";
import { screenWidth } from "../../Style/Style";
const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  episodeDate: {
    alignSelf: "center",
  },
  characterContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "grey",
    marginTop: 10,
  },
  characterHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardBody: {
    backgroundColor: "#B7B6D0",
    paddingBottom: 100,
  },
  characterCard: {
    width: screenWidth - 20,
    height: 90,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    textAlign: "center",
  },
  characterImage: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  characterName: {
    marginLeft: 20,
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    width: screenWidth - 150,
  },
  cardIcon: {
    alignSelf: "center",
    fontSize: 30,
    textAlign: "right",
  },
});
export default style;
