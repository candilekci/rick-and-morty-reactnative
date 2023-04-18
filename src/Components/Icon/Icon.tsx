import React, { useEffect, useState, Fragment } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import styles from "./IconStyle";
export default function Icon() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/randm.png")}
      />
    </SafeAreaView>
  );
}
