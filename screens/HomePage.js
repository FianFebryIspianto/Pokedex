import {
  Text,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
} from "../services/pokemon";
import { useState } from "react";
import styles from "../styles/styles";
import Card from "../components/card";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function HomePage() {
  const [search, setSearch] = useState("");

  const { data: pokemons, error, isLoading } = useGetAllPokemonQuery();
  const {
    data: onePokemon,
    errorOne,
    isLoadingOne,
  } = useGetPokemonByNameQuery(search);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E5E5E5",
          height: 70,
        }}
      >
        <TouchableOpacity>
          <Ionicons
            style={{
              padding: 10,
              marginLeft: 10,
            }}
            name="search"
            size={35}
            color="rgb(244,197,24)"
          />
        </TouchableOpacity>
        <TextInput
          style={{
            width: 280,
            marginRight: 20,
            backgroundColor: "#F2F2F2",
            alignContent: "center",
            alignSelf: "center",
            height: 40,
            borderRadius: 7,
          }}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search Pokemon by Name"
        ></TextInput>
        <AntDesign
          name="filter"
          size={30}
          color="rgb(244,197,24) "
          style={{
            marginRight: 20,
          }}
        />
      </View>
      {error ? (
        <Text>Error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={pokemons.results}
          renderItem={({ item }) => <Card {...item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          style={styles.flatList}
        />
      )}
    </SafeAreaView>
  );
}
