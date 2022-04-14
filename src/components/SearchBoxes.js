import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Center, Container, useColorModeValue } from "native-base"

const SearchBoxes = ({ boxdata, navigation }) => {
 const textColor2=useColorModeValue("#FFFFFF","#FFFFFF");
  return (
<Box mx={3}>
  <Box 
      marginX={1} marginBottom={10} borderRadius={12} shadow={2} marginTop={2}
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}
    >
      <Box p={1}
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        borderRadius="12">
        <Pressable 
          onPress={() => navigation.navigate('Detail', boxdata)}
        >
          <Center  w="200px" h="200px">
          {/* <Container w="200px" h="200px"  borderRadius="12"> */}
            <Image  
              w="200px" h="200px" 
              borderRadius="12"
              source={{ uri: boxdata.image }}
              alt={boxdata.alt}
              position="relative"
            />       
          {/* </Container> */}
          <Center zIndex={2} position="absolute" bg="rgba(102,102,102,0.7)" h="70" w="100%" bottom={0} borderRadius={12}><Text color={textColor2} p="10px" fontSize={16} >{boxdata.description}</Text></Center>
          </Center>
        </Pressable>
      </Box>   
    </Box>
</Box>
 
  )};

export default SearchBoxes;
