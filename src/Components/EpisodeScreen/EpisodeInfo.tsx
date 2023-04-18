import React, { useState, useEffect, FC } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import style from "./EpisodeStyle";
import EpisodeCharacters from "./EpisodeCharacters";
interface Props {
  item: any;
}
const EpisodeInfo: FC<Props> = ({ item }) => {
  if (item === undefined) {
    return (
      <View>
        <Text>Yükleniyor</Text>
      </View>
    );
  } else {
    return (
      <View>
        <View>
          <Image
            source={require("../../../assets/EpisodeCardImage.jpeg")}
            style={style.headerImage}
          />
          <Text style={style.headerText}>
            {item.name} - {item.episode}
          </Text>
          <Text style={style.episodeDate}> {item.air_date}</Text>
        </View>
        <EpisodeCharacters item={item.characters} />
      </View>
    );
  }
};

export default EpisodeInfo;
