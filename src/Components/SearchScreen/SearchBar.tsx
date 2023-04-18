import React, { useEffect, useState, Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./SearchStyle";
import { TextInput } from "react-native";
import EpisodeCard from "../HomePage/EpisodeCard/EpisodeCard";
import CharacterCard from "../EpisodeScreen/CaharacterCard";
import { EpisodeModel, CharacterModel } from "../../Types/Types";
import EpisodeCharacters from "../EpisodeScreen/EpisodeCharacters";
const SearchBar = () => {
  const [characterData, setCharacterData] = useState<CharacterModel[]>([]);
  const [episodeData, setEpisodeData] = useState<EpisodeModel[]>([]);
  const [search, setSearch] = useState("");
  interface SearchListModel {
    characterList: any;
    episodeList: any;
  }
  const [searchList, setSearchList] = useState<SearchListModel>({
    characterList: [],
    episodeList: [],
  });
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => setCharacterData(json.results))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((json) => setEpisodeData(json.results))
      .catch((error) => console.error(error));
  }, []);
  const SearchSubmmit = () => {
    console.log("search", search);

    const character = characterData.filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    const episode = episodeData.filter(
      (item: any) => item.name.toLowerCase() === search.toLowerCase()
    );
    setSearchList({
      characterList: character,
      episodeList: episode,
    });
  };

  return (
    <View>
      <TextInput
        onChangeText={(text) => setSearch(text)}
        style={style.searchBarInput}
        placeholder="Search"
      />
      <TouchableOpacity
        onPress={() => SearchSubmmit()}
        style={style.searchButton}
      >
        <Text style={style.searchButtonText}>Search</Text>
      </TouchableOpacity>
      <CharacterCard item={searchList.characterList.slice(0, 1)} />
      <EpisodeCard item={searchList.episodeList} />
    </View>
  );
};

export default SearchBar;
