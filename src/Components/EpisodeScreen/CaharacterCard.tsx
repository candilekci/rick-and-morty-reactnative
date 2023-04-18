import React, { useState, useEffect, FC } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import style from "./EpisodeStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
interface Props {
  item: any;
}
const CharacterCard: FC<Props> = ({ item }) => {
  if (!item.length) {
    return <></>;
  }
  const navigation = useNavigation();
  console.log("item", item);
  return (
    <ScrollView style={style.cardBody}>
      {item?.map((item: any) => (
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigation.navigate("CharacterScreen", { url: item.url });
          }}
          style={style.characterCard}
          key={item.id}
        >
          <Image style={style.characterImage} source={{ uri: item.image }} />
          <View>
            <Text style={style.characterName}>{item.name}</Text>
          </View>
          <AntDesign name="right" style={style.cardIcon} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CharacterCard;
