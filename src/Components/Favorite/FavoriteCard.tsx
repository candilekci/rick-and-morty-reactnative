import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import style from "./FavoriteCardStyle";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../Features/FavoriteSlice";
import { useNavigation } from "@react-navigation/native";
interface Props {
  item: any;
}
const FavoriteCard: FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleDelete = (item: any) => {
    Alert.alert(
      "Rick And Morty",

      (item.name as string) +
        "  isimli karakteri favorilerden kaldırmak istediğine emin misiniz?",
      [
        { text: "Evet", onPress: () => dispatch(removeFavorite(item)) },
        { text: "Hayır", style: "cancel" },
      ],
      {
        cancelable: true,
      }
    );
  };
  const CharacterListItem = (item: any) => (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate("CharacterScreen", { url: item.url })}
    >
      <View key={item.id} style={style.cardContainer}>
        <Image source={{ uri: item.image }} style={style.cardImage} />
        <Text style={style.cardHeaderText}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleDelete(item)}>
          <Fontisto name="close-a" style={style.closeButton} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingBottom: 90 }}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <CharacterListItem {...item} />;
        }}
      />
    </View>
  );
};
export default FavoriteCard;
