import React, { useState, useEffect, FC } from "react";
import { View, Text, FlatList } from "react-native";
import EpisodeListItem from "./EpisodeListItem";
interface Props {
  item: any;
}
const EpisodeCard: FC<Props> = ({ item }) => {
  return (
    <View style={{ paddingBottom: 90 }}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <EpisodeListItem {...item} />;
        }}
      />
    </View>
  );
};

export default EpisodeCard;
