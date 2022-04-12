import React from "react";
import { FlatList } from "native-base";
import SearchDetail from "./SearchDetail";

const SearchList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <SearchDetail album={item} navigation={navigation} />;
  return (
    <FlatList
      horizontal={true}
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}
      data={list}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default SearchList;

