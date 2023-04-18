import React, { useState, useEffect, FC } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "../../Components/Icon/Icon";
import EpisodeInfo from "../../Components/EpisodeScreen/EpisodeInfo";
import { EpisodeModel } from "../../Types/Types";
import style from "./EpisodeScreenStyle";
interface Props {
  route: any;
}
const EpisodeScreen: FC<Props> = ({ route }) => {
  const [JSON, setJSON] = useState<EpisodeModel>();
  useEffect(() => {
    fetch(`${route.params.url}`)
      .then((response) => response.json())
      .then((json) => {
        setJSON(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Icon />
      <ScrollView>
        <EpisodeInfo item={JSON} />
      </ScrollView>
    </View>
  );
};

export default EpisodeScreen;
