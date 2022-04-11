import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon,SectionList,Pressable} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import sections from '../json/personal_section.json';
import PersonalFile from "../components/PersonalFile";
import PersonalButton from "../components/PersonalButton";


console.log(sections[1].data);

const renderSectionHeader = ({section,navigation}) => {
    if(section.title=="options")return (
        <Box w="100%" alignItems={"center"}>
        <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={section.data}
            renderItem={({ item }) => <PersonalButton buttondata={item} navigation={navigation}/>}
            showsHorizontalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            keyExtractor={ (item,index) => item + index}
        />
        </Box>
    );
    else return <PersonalFile personaldata={section.data[0]} navigation={navigation}/> 
    // return <Text>{section.title}</Text>
  };
const renderItem = ({item,section,navigation}) => {
    if(section.title=="personal")return null;
       return (
           null
       )
   
  };
const PersonalScreen = ({ navigation }) => {
    return ( 
     <Box bgColor={"white"} w="100%" h="100%">
        <SectionList
            padding={0}
            margin={0}
            width="420px"
            sections={sections} 
            contentContainerStyle={{ paddingHorizontal: 14 }}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item,index) => item + index} 
            renderSectionHeader={renderSectionHeader} 
            renderItem={renderItem} 
        />
    </Box>
  );
};

export default PersonalScreen;




//for json
// "headimg":"asdasdasd",
// "name":"風魔小太郎",
// "school":"台北市立師範大學附屬高級中學",
// "articleNum":"666",
// "commentNum":"666",
// "collectedNum":"666"