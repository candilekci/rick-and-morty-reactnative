import React, { useEffect, useState, Fragment, FC } from "react";
import { View, Text } from "react-native";
import Icon from "../../Components/Icon/Icon";
import { CharacterModel } from "../../Types/Types";
import CharacterInfo from "../../Components/CharacterScreen/CharacterInfo";
interface Props {
  route: any;
}
const CharacterScreen: FC<Props> = ({ route }) => {
  const [character, setCharacter] = useState({} as CharacterModel);
  useEffect(() => {
    fetch(route.params.url)
      .then((response) => response.json())
      .then((json) => setCharacter(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      <Icon />
      {character.name === undefined ? (
        <Text>Loading...</Text>
      ) : (
        <CharacterInfo item={character} />
      )}
    </View>
  );
};
export default CharacterScreen;
