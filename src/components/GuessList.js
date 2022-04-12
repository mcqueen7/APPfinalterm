import React from "react";
import { FlatList } from "native-base";
import GuessDetail from "./GuessDetail";

const GuessList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <GuessDetail album={item} navigation={navigation} />;
  return (
    <FlatList
      horizontal={true}
    // _dark={{ bg: "blueGray.900" }}
    // _light={{ bg: "white" }}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default GuessList;

