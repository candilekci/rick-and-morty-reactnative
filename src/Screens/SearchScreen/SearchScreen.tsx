import React, { useEffect, useState, Fragment } from "react";
import { View, Text } from "react-native";
import Icon from "../../Components/Icon/Icon";
import style from "./SearchStyle";
import SearchBar from "../../Components/SearchScreen/SearchBar";
export default function SearchScreen() {
  return (
    <View style={style.body}>
      <Icon />
      <View>
        <SearchBar />
      </View>
    </View>
  );
}
