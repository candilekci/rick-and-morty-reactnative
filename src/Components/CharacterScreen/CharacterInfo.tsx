import React, { useEffect, useState, Fragment, FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "../../Components/Icon/Icon";
import { CharacterModel } from "../../Types/Types";
import style from "./CharacterScreenStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import FavButton from "./FavButton";
interface Props {
  item: CharacterModel;
}
const CharacterInfo: FC<Props> = ({ item }) => {
  return (
    <View>
      <View style={style.infoContainer}>
        <Image style={style.characterImage} source={{ uri: item.image }} />
      </View>
      <Text style={style.characterHeader}>{item.name}</Text>
      <View style={style.characterInfo}>
        <Text style={style.InfoText}>Türü: {item.species} </Text>
        <Text style={style.InfoText}>Durumu: {item.status}</Text>
        <Text style={style.InfoText}>Durumu: {item.status}</Text>
        <Text style={style.InfoText}>Nereli: {item.origin.name}</Text>
        <Text style={style.InfoText}>Nerde Yaşıyor: {item.location.name}</Text>
        <Text style={style.InfoText}>Cinsiyet: {item.gender}</Text>
      </View>
      <FavButton item={item} />
    </View>
  );
};
export default CharacterInfo;
