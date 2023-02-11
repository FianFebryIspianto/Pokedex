import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import { useState } from "react";
import styles from "../styles/styles";
import Moves from "../components/Moves";
import About from "../components/About";
import Stats from "../components/BaseStats";
import imgBg from "../assets/newwPng.png";
export default function DetailPage({ navigation, route }) {
  const pokemonName = route.params.name;
  const {
    data: pokemon,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(pokemonName);
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

  function getPokemonName() {
    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return pokemonName;
  }
  function btnActive() {
    return { color: pokemonColors[pokemon.types[0].type.name] };
  }

  const [menu, setMenuOption] = useState("About");
  const listMenuInfo = [
    {
      option: "About",
    },
    {
      option: "Stats",
    },
    {
      option: "Moves",
    },
  ];
  return (
    <>
      {error ? (
        <Text>Error Fetching Data</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : pokemon ? (
        <>
          <SafeAreaView
            style={{
              ...styles.container,
              backgroundColor: pokemonColors[pokemon.types[0].type.name],
            }}
          >
            <Text style={styles.textTitleDetail}>{getPokemonName()}</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: 20,
                  marginRight: 30,
                }}
              >
                {pokemon.types ? (
                  pokemon.types.map((type, i) => {
                    const typePokemon =
                      type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1);
                    return (
                      <View
                        key={i}
                        style={{
                          backgroundColor: "#fff",
                          opacity: 0.4,
                          borderRadius: 15,
                          alignSelf: "baseline",
                          margin: 5,
                        }}
                      >
                        <Text
                          style={{
                            color: "black",
                            padding: 5,
                            fontWeight: "bold",
                            fontSize: 20,
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        >
                          {typePokemon}
                        </Text>
                      </View>
                    );
                  })
                ) : (
                  <View></View>
                )}
              </View>
              <View style={{ paddingRight: 20 }}>
                <Text
                  style={{
                    color: "#fff",
                    opacity: 0.8,
                    fontWeight: "bold",
                    fontSize: 40,
                  }}
                >
                  #{`${pokemon.id}`.padStart(3, 0)}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                elevation: 5,
              }}
            >
              <Image
                style={styles.detailImagePokemon}
                source={{
                  uri: pokemon.sprites.other["official-artwork"][
                    "front_default"
                  ],
                }}
              />
              <Image source={imgBg} style={styles.detailImagePokemonBg} />
            </View>
            <View style={styles.containerMoves}>
              <SafeAreaView style={styles.detailContainerInfo}>
                <View style={styles.detailListTab}>
                  {listMenuInfo.map((e) => {
                    return (
                      <TouchableOpacity
                        key={e.option}
                        style={[
                          styles.detailBtnTab,
                          menu === e.option && {
                            borderBottomWidth: 1,
                            borderBottomColor:
                              pokemonColors[pokemon.types[0].type.name],
                          },
                        ]}
                        onPress={() => setMenuOption(e.option)}
                      >
                        <Text
                          style={[
                            styles.detailTextTab,
                            menu === e.option && btnActive(),
                          ]}
                        >
                          {e.option}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View>
                  <View style={{ paddingBottom: 80 }}>
                    {menu === "Moves" ? <Moves {...pokemon} /> : ""}

                    {menu === "About" ? <About {...pokemon} /> : ""}

                    {menu === "Stats" ? <Stats {...pokemon} /> : ""}
                  </View>
                </View>
              </SafeAreaView>
            </View>
          </SafeAreaView>
        </>
      ) : null}
    </>
  );
}
