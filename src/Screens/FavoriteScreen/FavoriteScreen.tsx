import React, { useEffect, useState, Fragment } from "react";
import { View, Text } from "react-native";
import Icon from "../../Components/Icon/Icon";
import { useSelector } from "react-redux";
import style from "./FavoriteStyle";
import FavoriteCard from "../../Components/Favorite/FavoriteCard";
export default function FavoriteScreen() {
  const favoriteList = useSelector((state: any) => state.favoriteList);
  return (
    <View style={style.body}>
      <Icon />
      {favoriteList.favoriteList.length === 0 ? (
        <Text style={style.nopeFavorite}>Favori bulunmamaktadır.</Text>
      ) : null}
      <FavoriteCard item={favoriteList.favoriteList} />
    </View>
  );
}
