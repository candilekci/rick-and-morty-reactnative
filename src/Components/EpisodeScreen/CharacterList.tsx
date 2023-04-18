import React, { useState, useEffect, FC } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import style from "./EpisodeStyle";
import CharacterCard from "./CaharacterCard";
interface Props {
  item: any;
  counter: number;
}
const CharacterList: FC<Props> = ({ item, counter }) => {
  return (
    <View>
      {item.length === counter ? (
        <CharacterCard item={item} />
      ) : (
        <Text>Yükleniyor...</Text>
      )}
    </View>
  );
};

export default CharacterList;
