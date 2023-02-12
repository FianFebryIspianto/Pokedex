import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
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
  const [currentPage, setCurrentPage] = useState(0);
  const [tempSearch, setTempSearch] = useState("");
  const [search, setSearch] = useState("");
  const loadNext = () => {
    setCurrentPage(currentPage + 20);
  };
  const loadPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 20);
    } else {
      setCurrentPage(0);
    }
  };
  const handleTempSearch = (e) => {
    e.preventDefault();
    setTempSearch(e.target.value);
  };
  const handleSubmitSerrach = (e) => {
    e.preventDefault();
    setSearch(tempSearch.toLowerCase());
  };
  const renderFlatListLoaders = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        {currentPage === 0 ? null : (
          <TouchableOpacity
            style={{
              backgroundColor: "#EA5D60",
              width: 160,
              height: 60,
              borderRadius: 10,
            }}
            onPress={loadPrevious}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#ffff",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Previous
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: "#F2F2F2",
            width: 160,
            height: 60,
            borderRadius: 10,
          }}
          onPress={loadNext}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#747476",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const {
    data: pokemons,
    error,
    isLoading,
  } = useGetAllPokemonQuery(currentPage);
  const {
    data: onePokemon,
    error: errorOne,
    isLoading: loadingOne,
  } = useGetPokemonByNameQuery(search);

  let pokemonAllArray = [];
  if (pokemons && pokemons?.results.length > 0) {
    pokemons.results.forEach((element) => {
      pokemonAllArray.push(element);
    });
  }
  let content;
  if (isLoading) {
    content = (
      <ActivityIndicator
        size="large"
        color="rgb(244,197,24)"
        style={{
          flex: 1,
          alignContent: "center",
        }}
      />
    );
  }
  if (error) {
    content = <Text>Error</Text>;
  }
  if (pokemonAllArray.length > 0) {
    content = (
      <FlatList
        data={pokemonAllArray}
        renderItem={({ item }) => <Card {...item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        style={styles.flatList}
        ListFooterComponent={renderFlatListLoaders}
      />
    );
  }
  if (search !== "" && onePokemon) {
    content = (
      <FlatList
        data={[onePokemon]}
        renderItem={({ item }) => <Card {...item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        style={styles.flatList}
      />
    );
  }

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
        <TouchableOpacity onPress={handleSubmitSerrach}>
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
          onChangeText={(text) => setTempSearch(text)}
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

      {content}
    </SafeAreaView>
  );
}
