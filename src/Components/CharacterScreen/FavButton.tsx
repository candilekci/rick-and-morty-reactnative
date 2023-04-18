import React, { useEffect, useState, Fragment, FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "../../Components/Icon/Icon";
import { CharacterModel } from "../../Types/Types";
import style from "./CharacterScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../Features/FavoriteSlice";
interface Props {
  item: CharacterModel;
}
const FavButton: FC<Props> = ({ item }) => {
  const favoriteList = useSelector((state: any) => state.favoriteList);

  const DisabledButton = () => {
    if (
      favoriteList.favoriteList.find((x: any) => x.id === item.id) === undefined
    ) {
      return false;
    } else {
      return true;
    }
  };
  const dispatch = useDispatch();
  const handleClicked = (item: any) => {
    favoriteList.favCounter < 10
      ? dispatch(addFavorite(item))
      : alert(
          "Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız."
        );
  };
  return (
    <View>
      <TouchableOpacity
        disabled={DisabledButton()}
        onPress={() => handleClicked(item)}
        style={style.favButtonContainer}
      >
        <Text style={style.favButtonText}>Favorilere Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FavButton;
