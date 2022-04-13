import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Image,Text, useColorModeValue, VStack} from "native-base"
import { ImageBackground } from "react-native";


const HomeBigBox2 = ({boxdata}) => {
  const boxBG=useColorModeValue("#ECECEC","#3C3C3C");
  const textColor=useColorModeValue("#000000","#FFFFFF");
    const image = { uri:`${boxdata.bg}` };
    return( 
        <Center mt="25" w="380" maxW="100%" h="200" mb="60px" bgColor={boxBG} alignItems="center" justifyContent="center" borderRadius={20}>
          <HStack >
            <VStack>
              <Text fontSize={16} color={textColor}>{boxdata.title}</Text>
              <Box borderColor={textColor} borderTopWidth={1} borderBottomWidth={1} w="180" h="5px"></Box>
              <Text mt="15px" w="200" fontSize={12} color={textColor}>{boxdata.content}</Text>
              <Button w="110" h="40px" mt="15px" borderRadius={16} bgColor="#477CEA" fontSize={16}>{boxdata.button}</Button>
            </VStack>
            <VStack >
            <Image source={image} alt={boxdata.title} size="130px"alignSelf={"center"} />
            </VStack>
          </HStack>
        </Center>
    );
};



export default HomeBigBox2;