import React from "react";
import {  StyleSheet } from "react-native";
import {NativeBaseProvider,SectionList,Heading,Center,Text,FlatList, } from 'native-base';

import sections from "../json/home_all_section.json";
// import sections from "../json/test.json";
import HomeAllSchoolDetail from "./HomeAllSchoolDetail";
import HomeBigBox1 from "./HomeBigBox1";


// console.log(sections);

const HomeAllList = (navigation) => {
  const renderSectionHeader = ({section}) => {
     
    switch (section.type){
        case "big1":
            return null
        case "8boxes":
            return  <Center> <Heading fontSize="xl" mt="8" pb="4">FUCK2{section.title} </Heading> </Center>     
        case "4boxes":
            return  <Center> <Heading fontSize="xl" mt="8" pb="4">FUCK2{section.title} </Heading> </Center>    
        case "big2":
            return <Center> <Heading fontSize="xl" mt="8" pb="4">FUCK2{section.title} </Heading> </Center>    
        default:
            return null
        
    }
  
    };
  const renderItem = ({item,section}) => {
   
    switch (section.type){
        case "big1":
            return <HomeBigBox1 boxdata={item}/>
        case "8boxes":
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
    <SectionList maxW="500" w="100%" mb="50"
        sections={sections} 
        contentContainerStyle={{ paddingHorizontal: 14 }}
        stickySectionHeadersEnabled={false}
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
