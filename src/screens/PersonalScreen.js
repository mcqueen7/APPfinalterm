import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import personaldata from '../json/personal_section.json';

const index=0;

const PersonalScreen = ({ navigation }) => {
    
  return (
   <Box bgColor={"white"} w="100%" h="100%">
       <Box bgColor={"#FFF5DB"} w="100%" h="470px">
        <Image source={{uri:personaldata[index].headimg}} alt={`${personaldata[index].name}的照片`} size={"120px"}/>
        <Text>{personaldata[index].name}</Text>
        <Text>{personaldata[index].school}</Text>
        <HStack>
            <Center>
                <Text>{personaldata[index].articleNum}</Text>
                <Text>文章數</Text>
            </Center>
            <Center>
                <Text>{personaldata[index].commentNum}</Text>
                <Text>留言數</Text>
            </Center>
            <Center>
                <Text>{personaldata[index].collectedNum}</Text>
                <Text>被收藏數</Text>
            </Center>
        </HStack>
        <Button>我的學習歷程</Button>
        <HStack>
            <Center>
                <MaterialCommunityIcons name="account-multiple-outline" size={25} />
               <Text>好友</Text>
            </Center>
            <Center>
                <MaterialCommunityIcons name="account-group-outline" size={25} />
                <Text>社團</Text>
            </Center>
            <Center >
            <MaterialCommunityIcons name="message-text-outline" size={25} />
                <Text>聊天室</Text>
            </Center>
            <Center>
            <MaterialCommunityIcons name="gift-outline" size={25} />
                <Text>禮物</Text>
            </Center>
        </HStack>
       </Box>
   </Box>
  );
};

export default PersonalScreen;


