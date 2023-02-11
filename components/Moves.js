import { Text, View, ScrollView } from "react-native";
import styles from "../styles/styles";
export default function Moves({ moves, types }) {
  const pokemonColors = {
    normal: "#B5B9C4",
    fighting: "#EB4971",
    flying: "#83A2E3",
    poison: "#9F6E97",
    ground: "#F78551",
    rock: "#D4C294",
    bug: "#8BD674",
    ghost: "#8571BE",
    steel: "#4C91B2",
    fire: "#FFA756",
    water: "#58ABF6",
    grass: "#8BBE8A",
    electric: "#F2CB55",
    psychic: "#FF6568",
    ice: "#91D8DF",
    dragon: "#7383B9",
    dark: "#6F6E78",
    fairy: "#EBA8C3",
  };
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {moves.map((move, i) => {
            return (
              <View
                key={i}
                style={{
                  backgroundColor: pokemonColors[types[0].type.name],
                  borderRadius: 5,
                  alignSelf: "baseline",
                  margin: 5,
                  opacity: 0.4,
                }}
              >
                <Text style={{ color: "black", padding: 5 }}>
                  {move.move.name}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
