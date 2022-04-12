import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const GuessDetail = ({ album, navigation }) => {
  return (
    <Box 
       mx={4} 

    >
      
      <HStack 
        _dark={{ bg: "dark.900"}}
        _light={{ bg: "yellow.100" }} borderRadius="12" height={16} w={16}  justifyContent="center">       
        <VStack justifyContent="center" > 
          <Text  
        _dark={{ color: "warmGray.700"}}
        _light={{ color:"warmGray.700" }}>{album.title}</Text>
        </VStack>
      </HStack>
      <Box p={1} justifyContent="center"
        // _dark={{ bg: "blueGray.900" }}
        // _light={{ bg: "white" }}
        >
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >        
        </Pressable>
      </Box>   
    </Box>
  )};

export default GuessDetail;
