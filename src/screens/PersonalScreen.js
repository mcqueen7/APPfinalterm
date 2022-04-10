import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { personalData } from "../json/home_all_section.json";
console.log(personalData);

const PersonalScreen = ({ navigation }) => {
    
  return (
   <Center bgColor={"white"} w="100%" h="100%">
       <Text>asdasdasdasd</Text>
    
       {/* <Center>
        <Image />
        <Text>{persaonalData.name}</Text>
        <Text>{persaonalData.school}</Text>
        <HStack>
            <Center>
                <Text>{persaonalData.articleNum}</Text>
                <Text>文章數</Text>
            </Center>
            <Center>
                <Text>{persaonalData.commentNum}</Text>
                <Text>留言數</Text>
            </Center>
            <Center>
                <Text>{persaonalData.collectedNum}</Text>
                <Text>被收藏數</Text>
            </Center>
        </HStack>
        <Button>我的學習歷程</Button>
        <HStack>
            <Center>
                <MaterialCommunityIcons name="playlist-edit" size={"25px"} />
                <Text>好友</Text>
            </Center>
            <Center>
                <MaterialCommunityIcons name="playlist-edit" size={"25px"} />
                <Text>社團</Text>
            </Center>
            <Center>
            <MaterialCommunityIcons name="playlist-edit" size={"25px"} />
                <Text>聊天室</Text>
            </Center>
            <Center>
            <MaterialCommunityIcons name="playlist-edit" size={"25px"} />
                <Text>禮物</Text>
            </Center>
        </HStack>
       </Center> */}

   </Center>
  );
};

export default PersonalScreen;


