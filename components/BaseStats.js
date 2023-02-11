import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles/styles";
import * as Progress from "react-native-progress";
export default function BaseStat({ stats, types }) {
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
        {stats.map((stat, i) => {
          return (
            <View key={i} style={{ flexDirection: "row", marginBottom: 20 }}>
              <Text style={styles.statsTitle}>
                {stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}
              </Text>
              <Text style={styles.statsText}>{stat.base_stat}</Text>
              <View
                style={{ width: 130, alignContent: "center", paddingTop: 10 }}
              >
                <Progress.Bar
                  progress={stat.base_stat / 100}
                  width={130}
                  color={
                    stat.base_stat > 50
                      ? pokemonColors[types[0].type.name]
                      : "#B5B9C4"
                  }
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
