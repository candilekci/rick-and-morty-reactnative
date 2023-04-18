import React, { useState, Fragment, useEffect } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import Icon from "../../Components/Icon/Icon";
import axios from "axios";
import { EpisodeModel } from "../../Types/Types";
import EpisodeCard from "../../Components/HomePage/EpisodeCard/EpisodeCard";
import style from "./HomeStyle";
export default function HomeScreen() {
  const [dataEpisodes, setDataEpisodes] = useState([] as EpisodeModel[]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        setDataEpisodes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={style.body}>
      <Icon />
      <EpisodeCard item={dataEpisodes} />
    </View>
  );
}
