import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native";
import { useGetAllPokemonQuery } from "../services/pokemon";
import { useState } from "react";
import styles from "../styles/styles";
import Card from "../components/card";
export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
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

  const {
    data: pokemons,
    error,
    isLoading,
  } = useGetAllPokemonQuery(currentPage);

  let pokemonAllArray = [];
  if (pokemons && pokemons?.results.length > 0) {
    pokemons.results.forEach((element) => {
      pokemonAllArray.push(element);
    });
  }

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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>

      {error ? (
        <Text>Error</Text>
      ) : isLoading ? (
        <ActivityIndicator
          size="large"
          color="rgb(244,197,24)"
          style={{
            flex: 1,
            alignContent: "center",
          }}
        />
      ) : (
        <FlatList
          data={pokemonAllArray}
          renderItem={({ item }) => <Card {...item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          style={styles.flatList}
          ListFooterComponent={renderFlatListLoaders}
        />
      )}
    </SafeAreaView>
  );
}
