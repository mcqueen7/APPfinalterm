import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon, VStack ,Pressable,useColorMode, useColorModeValue} from "native-base";


const MsgBox = ({ data}) => {
    console.log("FUCKING DATA"+JSON.stringify(data));
    const{SenderName,messege,photourl}=data;
    console.log("FUCKING ABC"+SenderName+messege+photourl);
  return (
    <Box w="100%" mb="2px">
        <HStack alignItems={"center"}>
            <Image source={{uri:photourl}} alt={`${SenderName}的照片`} size={"40px"}  borderRadius={100}/>
            <Text> {SenderName} ：</Text>
            <Text>{messege}</Text>
        </HStack>
    </Box>
  );
};

export default MsgBox;


