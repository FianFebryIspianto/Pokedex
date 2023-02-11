import { StyleSheet, Platform, Dimensions } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  card: {
    flex: 1,
    height: 140,
  },
  flatList: {
    paddingHorizontal: 5,
  },
  cardSpacing: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 50,
    margin: 10,
    marginBottom: 15,
    fontWeight: "bold",
    color: "gray",
  },
  cardName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
  },
  bgStyles: {
    backgroundColor: "#000",
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  cardImage: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
    zIndex: 1,
  },
  bgImage: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
    zIndex: -1,
  },
  cardTypeContainer: {
    backgroundColor: "#fff",
    opacity: 0.4,
    borderRadius: 10,
    alignSelf: "baseline",
    margin: 1,
  },
  cardTypeText: {
    color: "black",
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    opacity: 1,
  },
  textTitleDetail: {
    fontSize: 50,
    margin: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  detailImagePokemon: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 20,
  },
  containerMoves: {
    top: 180,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    paddingTop: 20,
    zIndex: -1,
  },
  detailContainerInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  detailListTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
    paddingTop: 20,
  },
  detailBtnTab: {
    width: Dimensions.get("window").width / 3,
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    padding: 10,
    justifyContent: "center",
  },
  detailImagePokemonBg: {
    width: 250,
    height: 200,
    position: "absolute",
    opacity: 0.1,
    zIndex: -12,
  },
  detailTextTab: { fontSize: 20, color: "gray", fontWeight: "bold" },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 30,
    color: "grey",
    opacity: 0.6,
    width: 120,
  },
  aboutText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "grey",
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 30,
    color: "grey",
    opacity: 0.7,
    width: 120,
  },
  aboutText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "grey",
  },
  statsTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 30,
    color: "grey",
    opacity: 0.7,
    width: 120,
  },

  statsText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
    color: "grey",
    width: 80,
  },
});
