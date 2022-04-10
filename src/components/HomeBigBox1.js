import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack} from "native-base"
import { ImageBackground } from "react-native";


const HomeBigBox1 = ({boxdata}) => {
    const image = { uri:`${boxdata.bg}` };
    return( 
        <Center mt="25" w="400" maxW="100%" h="230" bgColor="#C8C8C8" alignItems="center" justifyContent="center" borderRadius={20}>
          <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}>
          <HStack  alignContent="center" >
            <VStack ml="16px">
              <Text fontSize={16}>{boxdata.title}</Text>
              <Box borderColor="black" borderTopWidth={1} borderBottomWidth={1} w="180" h="5px"></Box>
            </VStack>
            <VStack flexWrap="wrap" ml="30">
              <Text w="160" fontSize={12}>{boxdata.content}</Text>
              <Button w="110" h="40px" mt="15px" borderRadius={16} bgColor="#3B5998" fontSize={16}>{boxdata.button}</Button>
            </VStack>
          </HStack>
          </ImageBackground>
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