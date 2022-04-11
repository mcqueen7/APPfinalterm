import React from "react";
import {  StyleSheet } from "react-native";
import {NativeBaseProvider,SectionList,Heading,Center,Text,FlatList, VStack, HStack, Box, } from 'native-base';

import sections from "../json/home_all_section.json";

import HomeAllSchoolDetail from "./HomeAllSchoolDetail";
import HomeBigBox1 from "./HomeBigBox1";
import HomeBigBox2 from "./HomeBigBox2";
import Home8Boxes1 from "./Home8Boxes1";
import Home8Boxes2 from "./Home8Boxes2";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

// console.log(sections);

const Grade1List = (navigation) => {
  const renderSectionHeader = ({section}) => {
    switch (section.type){
        case "big1":
            return null
        case "8boxes1":
            return (
                <>
                    <HStack mt="30px"><Heading fontSize="24" mr="230px">{section.title}</Heading>
                    <Pressable onPress={()=>{alert("做不完了還MORE!!!!!!!!");}}><Heading fontSize="16" pt="3px">More</Heading></Pressable></HStack>
                    <>
                    <FlatList
                        scrollEnabled={false}
                        numColumns={4}
                        data={section.data}
                        renderItem={({ item }) => <Home8Boxes1 boxdata={item} navigation={navigation}/>}
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
                    <HStack mt="30px"><Heading fontSize="24" mr="230px">{section.title}</Heading>
                    <Pressable onPress={()=>{alert("做不完了還MORE!!!!!!!!");}}><Heading fontSize="16" pt="3px">More</Heading></Pressable></HStack>
                    <>
                    <FlatList
                        scrollEnabled={false}
                        numColumns={4}
                        data={section.data}
                        renderItem={({ item }) => <Home8Boxes2 boxdata={item} navigation={navigation}/>}
                        showsHorizontalScrollIndicator={false}
                        stickySectionHeadersEnabled={false}
                        keyExtractor={ item => item.title }
                    />
                    </>
                </>
            )
        case "4boxes":
            return  <Heading fontSize="24px" mt="30px">{section.title} </Heading>   //mr26px
        case "big2":
            return null    
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
            return <HomeBigBox2 boxdata={item}/>
        default:
            return null
    }
   
  };
  return (
    <SectionList maxW="500" w="100%"  h="100%"  bgColor={"white"}
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
