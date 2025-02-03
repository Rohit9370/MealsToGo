import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import Search from "../Component/restaurant.search";
export default function MapScreen() {
  return (
    <> 
       <Search />
      <MapView style={styles.map} />
  
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
