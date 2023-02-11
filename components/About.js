import { Text, View } from "react-native";
import styles from "../styles/styles";
export default function About({ name, species, height, weight, abilities }) {
  function getPokemonName() {
    const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
    return pokemonName;
  }
  const arrAbilities = abilities.map((ability) => {
    const newAbility =
      ability.ability.name.charAt(0).toUpperCase() +
      ability.ability.name.slice(1);
    return newAbility;
  });
  const heightInM = height / 10;
  const weightInKg = weight / 10;

  return (
    <View>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text style={styles.aboutTitle}>Species</Text>
        <Text style={styles.aboutText}>{getPokemonName()}</Text>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text style={styles.aboutTitle}>Height</Text>
        <Text style={styles.aboutText}>{heightInM} m</Text>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text style={styles.aboutTitle}>Weight</Text>
        <Text style={styles.aboutText}>{weightInKg} kg</Text>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text style={styles.aboutTitle}>Abilities</Text>
        <Text style={styles.aboutText}>{arrAbilities.join(", ")}</Text>
      </View>
    </View>
  );
}
