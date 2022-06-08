import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image, useColorModeValue} from "native-base"
import { ImageBackground } from "react-native";


const HomeBigBox1 = ({boxdata}) => {
    const boxBG=useColorModeValue("#ECECEC","#3C3C3C");
    const image = { uri:`${boxdata.bg}` };
    const textColor=useColorModeValue("#000000","#FFFFFF");
    return( 
        // <Box mt="25" w="400" maxW="100%" h="160" bgColor="#C8C8C8"  borderRadius={20}>
         
        //   <VStack  justifyContent={"center"} mt="15px">
        //     <HStack my="20px" mx="30px" justifyContent={"flex-start"}>
        //       <Text bold fontSize={16} _dark={{color:"black"}}>{boxdata.title}</Text>
        //       {/* <Box borderColor="black" borderTopWidth={1} borderBottomWidth={1} w="180" h="5px"></Box> */}
        //     </HStack>
        //     <HStack flexWrap="wrap"  mx="30px" justifyContent={"flex-start"}>
        //       <Text w="160" fontSize={12} _dark={{color:"black"}}>{boxdata.content}</Text>            
        //     </HStack>
        //     <Image source={image} alt={boxdata.title} size="130px"alignSelf={"center"} />
        //   </VStack>
         
        // </Box>
        <Center mt="25" w="380" maxW="100%" h="160"  bgColor={boxBG}  alignItems="center" justifyContent="center" borderRadius={10}>
        <HStack >
          <VStack>
            <Text  mt="20px" fontSize={16} color={textColor}>{boxdata.title}</Text>
            {/* <Box borderColor={textColor} borderTopWidth={1} borderBottomWidth={1} w="180" h="5px"></Box> */}
            <Text mt="15px" w="200" fontSize={12} color={textColor}>{boxdata.content}</Text>
          </VStack>
          <VStack >
          <Image source={image} alt={boxdata.title} size="120px"alignSelf={"center"} />
          </VStack>
        </HStack>
      </Center>
    );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignContent:"center",
    width: 400,
    height:230,
    
    
  },
});


export default HomeBigBox1;