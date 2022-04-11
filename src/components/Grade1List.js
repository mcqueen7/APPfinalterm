import React from "react";
import {  StyleSheet } from "react-native";
import {NativeBaseProvider,SectionList,Heading,Center,Text,FlatList, VStack, HStack, Box, } from 'native-base';

import sections from "../json/grade1_section.json";
import GradeCompletion from "./GradeCompletion";
import GradeBoxes from "./GradeBoxes";


// console.log(sections);

const Grade1List = (navigation) => {
    const renderSectionHeader = ({section}) => {
        if(section.title=="completion")  { 
            return (
                <>
                    <>
                    <FlatList
                        scrollEnabled={false}
                        numColumns={4}
                        data={section.data}
                        renderItem={({ item }) => <GradeCompletion comdata={item} navigation={navigation}/>}
                        showsHorizontalScrollIndicator={false}
                        stickySectionHeadersEnabled={false}
                        keyExtractor={ item => item.title}
                    />
                    </>
                </>
        );
        }
        else return (
        <>
            <Heading fontSize="24" mr="230px" mt="20px">{section.title}</Heading>
            <>
            <FlatList
                scrollEnabled={false}
                numColumns={4}
                data={section.data}
                renderItem={({ item }) => <GradeBoxes boxdata={item} navigation={navigation}/>}
                showsHorizontalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                keyExtractor={ item => item.title}
            />
            </>
        </>
            
        )
  };

    const renderItem = ({item,section}) => {
       return null
    };
  return (
    <SectionList w="100%"  h="100%"  bgColor={"white"}
        sections={sections} 
        contentContainerStyle={{ paddingHorizontal: 14 }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item,index) => item + index} 
        renderSectionHeader={renderSectionHeader} 
        renderItem={renderItem} 
        />
  );
};
const styles = StyleSheet.create({
  sectionHeader: { 
    paddingTop: 16,
    paddingBottom: 16,
  },
})

export default Grade1List;
