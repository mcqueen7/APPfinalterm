import React from "react";
import {  StyleSheet } from "react-native";
import {NativeBaseProvider,SectionList,Heading,Center,Text,FlatList, VStack, HStack, Box, } from 'native-base';

import sections from "../json/grade1_section.json";
import GradeCompletion from "./GradeCompletion";
import GradeBoxes from "./GradeBoxes";


// console.log(sections);
//sadhasjkl
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
                        keyExtractor={ (item ,index)=>item+index}
                    />
                    </>
                </>
        );
        }
        else return (
        <>
            <Heading fontSize="24" ml="5px" mt="30px">{section.title}</Heading>
            <>
            <FlatList
                height={200}
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <GradeBoxes boxdata={item} navigation={navigation}/>}
                showsHorizontalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                keyExtractor={ (item)=> item.label}
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
        keyExtractor={(item,index) => item+index} 
        renderSectionHeader={renderSectionHeader} 
        renderItem={renderItem} 
        />
  );
};


export default Grade1List;
