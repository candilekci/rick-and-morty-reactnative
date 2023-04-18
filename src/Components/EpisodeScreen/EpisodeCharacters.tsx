import React, { useState, useEffect, FC } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import style from "./EpisodeStyle";
import axios from "axios";
import { CharacterModel } from "../../Types/Types";
import { useDispatch, useSelector } from "react-redux";
import { addEpisodeCharacterList } from "../../Features/EpisodeCharacterSlice";
import CharacterList from "./CharacterList";
interface Props {
  item: any;
}
const EpisodeCharacters: FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const [dataCharacters, setDataCharacters] = useState([] as CharacterModel[]);
  const getCharacters = async (url: string) => {
    const response = await axios.get(url);
    const data = response.data;
    setDataCharacters((prev) => [...prev, data]);
  };
  useEffect(() => {
    for (let i = 0; i < item.length; i++) {
      getCharacters(item[i]);
    }
  }, []);

  return (
    <View style={style.characterContainer}>
      <Text style={style.characterHeader}>Karakterler </Text>
      <CharacterList item={dataCharacters} counter={item.length} />
    </View>
  );
};

export default EpisodeCharacters;
