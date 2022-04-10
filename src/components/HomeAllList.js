import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import {NativeBaseProvider,Heading} from 'native-base';

import sections from "../json/home_all_section.json";
import HomeAllSchoolDetail from "./HomeAllSchoolDetail";

const HomeAllList = (navigation) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Heading style={styles.sectionHeader}>{section.title}</Heading>
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <HomeAllSchoolDetail album={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          keyExtractor={ item => item.title }
        />
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
  };
  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};
const styles = StyleSheet.create({
  sectionHeader: { 
    paddingTop: 16,
    paddingBottom: 16,
  },
})

export default HomeAllList;
