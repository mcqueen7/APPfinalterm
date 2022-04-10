import React from "react";
import {  StyleSheet } from "react-native";
import {NativeBaseProvider,SectionList,Heading,Center,Text,FlatList, VStack, HStack, Box, } from 'native-base';

import sections from "../json/home_all_section.json";
// import sections from "../json/test.json";
import HomeAllSchoolDetail from "./HomeAllSchoolDetail";
import HomeBigBox1 from "./HomeBigBox1";
import Home8Boxes from "./Home8Boxes";

// console.log(sections);
const HomeAllList = (navigation) => {
  const renderSectionHeader = ({section}) => {
    switch (section.type){
        case "big1":
            return null
        case "8boxes1":
            return (
                <>
                    <HStack mt="30px"><Heading fontSize="24" mr="230px">{section.title}</Heading><Heading fontSize="16" pt="3px">More</Heading></HStack>
                    <>
                    <FlatList
                        scrollEnabled={false}
                        numColumns={4}
                        data={section.data}
                        renderItem={({ item }) => <Home8Boxes boxdata={item} navigation={navigation}/>}
                        showsHorizontalScrollIndicator={false}
                        stickySectionHeadersEnabled={false}
                        keyExtractor={ item => item.title}
                    />
                    </>
                </>
            )
        case "8boxes2":
            return  (
                <>
                    <HStack mt="30px"><Heading fontSize="24" mr="230px">{section.title}</Heading><Heading fontSize="16" pt="3px">More</Heading></HStack>
                    <>
                    <FlatList
                        scrollEnabled={false}
                        numColumns={4}
                        data={section.data}
                        renderItem={({ item }) => <Home8Boxes boxdata={item} navigation={navigation}/>}
                        showsHorizontalScrollIndicator={false}
                        stickySectionHeadersEnabled={false}
                        keyExtractor={ item => item.title }
                       
                    />
                    </>
                </>
            )
        case "4boxes":
            return  <Center><Heading fontSize="xl" mt="8" pb="4">FUCK2{section.title} </Heading></Center>    
        case "big2":
            return <Center><Heading fontSize="xl" mt="8" pb="4">FUCK2{section.title} </Heading></Center>    
        default:
            return null
    }
  };
  const renderItem = ({item,section}) => {
   
    switch (section.type){
        case "big1":
            return <HomeBigBox1 boxdata={item}/>
        case "8boxes1":
            return null
        case "8boxes2":
            return null
        case "4boxes":
            return null
        case "big2":
            return <HomeBigBox1 boxdata={item}/>
        default:
            return null
    }
   
  };
  return (
    <SectionList maxW="500" w="100%" mb="50" bgColor={"white"}
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

export default HomeAllList;
