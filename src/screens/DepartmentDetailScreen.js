import React from "react";
import {  StyleSheet } from "react-native";
import {NativeBaseProvider,SectionList,Heading,Center,Text,FlatList, VStack, HStack, Box, useColorModeValue, } from 'native-base';

import sections from "../json/department_section.json";
import SchoolCompletion from "../components/SchoolCompletion";
import SchoolBoxes from "../components/SchoolBoxes";



const DepartmentDetailScreen = (navigation) => {   
    const BGcolor=useColorModeValue("#FFFFFF","#313131");
    const renderSectionHeader = ({section}) => {   
        if(section.title=="completion")  { 
            return (
                <>
                    <>
                    <FlatList
                        scrollEnabled={false}
                        alignItems={"center"}
                        numColumns={4}
                        data={section.data}
                        renderItem={({ item }) => <SchoolCompletion comdata={item} navigation={navigation}/>}
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
            <Heading  fontSize="24" ml="30px" mt="30px">{section.title}</Heading>
            <>
            <FlatList
                height={200}
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <SchoolBoxes boxdata={item} navigation={navigation}/>}
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
        contentContainerStyle={{ paddingHorizontal: 2 }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item,index) => item+index} 
        renderSectionHeader={renderSectionHeader} 
        renderItem={renderItem} 
        backgroundColor={BGcolor}
        />
  );
};


export default DepartmentDetailScreen;
