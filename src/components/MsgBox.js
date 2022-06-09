import React, { useEffect } from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon, VStack ,Pressable,useColorMode, useColorModeValue} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { readUserAsync, selectGeneral, selectLogin, } from "../redux/accountSlice";


const MsgBox = ({ data}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readUserAsync());
     }, [general])
    const general = useSelector(selectGeneral);
    const login=useSelector(selectLogin);
    //console.log("FUCKING DATA"+JSON.stringify(data));
    const{SenderName,messege,photourl}=data;
    //console.log("FUCKING ABC"+SenderName+messege+photourl);
    console.log("LOG"+login.hasLogin+"USER："+general.name+SenderName);

    if(login.hasLogin==true&&general.name==SenderName){
        return (
        <Box w="100%" mb="2px" >
            <HStack alignItems={"center"} justifyContent={"flex-end"}>
                <Text></Text>
                <Text>{messege} </Text>
                <Image source={{uri:photourl}} alt={`${SenderName}的照片`} size={"40px"}  borderRadius={100}/>
            </HStack>
        </Box>
           
          );
    }
  else{
    return (
        <Box w="100%" mb="2px">
        <HStack alignItems={"center"}>
            <Image source={{uri:photourl}} alt={`${SenderName}的照片`} size={"40px"}  borderRadius={100}/>
            <Text> {SenderName} ：</Text>
            <Text>{messege}</Text>
        </HStack>
    </Box>
      );
  } 
};

export default MsgBox;


