import React, { useState, useEffect, FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "./EpisodeCardStyle";
import { useNavigation } from "@react-navigation/native";
const EpisodeListItem = (item: any) => {
  const navigation = useNavigation();
  const handleClicked = (url: string) => {
    //@ts-ignore
    navigation.navigate("EpisodeScreen", { url });
  };

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        handleClicked(item.url);
      }}
    >
      <Image
        source={require("../../../../assets/EpisodeCardImage.jpeg")}
        style={style.Image}
      />
      <View>
        <Text style={style.episodeHeader}> {item.name}</Text>
        <Text>Sezon: {String(item.episode).slice(2, 3)}</Text>
        <Text>Bölüm: {String(item.episode).slice(4, 6)}</Text>
        <Text>Yayınlanma Tarihi: {item.air_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeListItem;
