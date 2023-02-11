import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import bgImg from "../assets/Pokeball_card.png";

export default function card({ name, url }) {
  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);
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
  const navigation = useNavigation();
  function getPokemonName() {
    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return pokemonName;
  }
  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Detail", pokemon)}
          >
            <View style={styles.card}>
              <View style={styles.cardSpacing}>
                <View
                  style={{
                    ...styles.bgStyles,
                    backgroundColor: pokemonColors[pokemon.types[0].type.name],
                  }}
                >
                  <ImageBackground source={bgImg} style={styles.bgImage} />
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: pokemon.sprites.other["official-artwork"][
                        "front_default"
                      ],
                    }}
                  />
                  <Text style={styles.cardName}>{getPokemonName()}</Text>

                  {pokemon.types.map((type, i) => {
                    const typePokemon =
                      type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1);
                    return (
                      <View key={i} style={styles.cardTypeContainer}>
                        <Text style={styles.cardTypeText}>{typePokemon}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
}
