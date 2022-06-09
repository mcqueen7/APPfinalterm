import React, { useEffect } from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon,useColorModeValue } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import { selectArticleNum } from "../redux/articleNumSlice";
import { selectGeneral, readUserAsync } from "../redux/accountSlice";

const PersonalFile = ({ personaldata }) => {
    const dispatch = useDispatch();
    const general = useSelector(selectGeneral);
    const  artcount = useSelector(selectArticleNum);
    console.log(artcount);
    useEffect(() => {
        dispatch(readUserAsync());
     }, [])
    const topBoxBGColor=useColorModeValue("#FFF5DB","#36322F");
    const iconColor=useColorModeValue("#000000","#FFFFFF");
  return (
       <Box bgColor={topBoxBGColor}mr="2" h="400px" alignItems={"center"} borderBottomLeftRadius={30} borderBottomRightRadius={30} mb="30px">
        <Image mt={4} source={{uri:general.adrs}} alt={`${general.name}的照片`} size={"120px"} borderRadius={100}/>
        <Text fontSize={20} fontWeight={"bold"} mt={"2"}>{general.name}</Text>
        <Text fontSize={16} _light={{color:"#868686"}} _dark={{color:"#B0B0B0"}}>{general.schoolname}</Text>
        <HStack mt={2}>
            <Center mx={5} w="70px">
                <Text fontSize={16}>{Number(personaldata.articleNum)+artcount}</Text>
                <Text fontSize={16}>文章數</Text>
            </Center>
            <Center mx={5} w="70px">
                <Text fontSize={16}>{general.msgNum}</Text>
                <Text fontSize={16}>留言數</Text>
            </Center>
            <Center mx={5} w="70px"> 
                <Text fontSize={16}>{personaldata.collectedNum}</Text>
                <Text fontSize={16}>被收藏數</Text>
            </Center>
        </HStack>
        <Button mt={2} w="77%" h={50} _light={{bgColor:"#477CEA"}} _dark={{bgColor:"#FFF5F5"}} 
        borderRadius={"100"} onPress={()=>alert("time limit")}>
            <Text fontSize={16} _light={{color:"#ffffff"}} _dark={{color:"#000000"}}>我的學習歷程</Text>
        </Button>
        <HStack mt={5}>
            <Center mx={7}>
                <MaterialCommunityIcons name="account-multiple-outline" size={25} color={iconColor}/>
               <Text fontSize={16}>好友</Text>
            </Center>
            <Center mx={7}>
                <MaterialCommunityIcons name="account-group-outline" size={25} color={iconColor} />
                <Text fontSize={16}>社團</Text>
            </Center>
            <Center mx={7}>
            <MaterialCommunityIcons name="message-text-outline" size={25} color={iconColor} />
                <Text fontSize={16}>聊天室</Text>
            </Center>
            <Center mx={7}>
            <MaterialCommunityIcons name="gift-outline" size={25} color={iconColor} />
                <Text fontSize={16}>禮物</Text>
            </Center>
        </HStack>
       </Box>
  );
};

export default PersonalFile;


