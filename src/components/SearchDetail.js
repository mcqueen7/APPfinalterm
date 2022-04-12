import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const SearchDetail = ({ album, navigation }) => {
  return (
<Box mx={3}>
  <Box 
      marginX={1} marginBottom={2} borderRadius={12} shadow={2} marginTop={2}
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}
    >
      
      <Box p={1}
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        borderRadius="12">
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w="290" h="200" ratio={1} borderRadius="12">
            <Image  
              borderRadius="12"
              source={{ uri: album.image }}
              alt={album.title}
            />            
          </AspectRatio>
        </Pressable>
      </Box>   
    </Box>
</Box>
   
  
  )};

export default SearchDetail;
