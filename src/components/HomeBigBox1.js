import React from "react";
import {Box,Button,Center,HStack,Text, VStack} from "native-base"


const HomeBigBox1 = ({boxdata}) => {
    console.log(boxdata);
    return( 
        <Box mt="25" w="400" maxW="100%" h="230" bgColor="blue.500" alignItems="center" justifyContent="center">
          <HStack  alignContent="center">
            <VStack >
              <Text mr="10px" fontSize={16}>{boxdata.title}</Text>
              <Box borderColor="black" borderTopWidth={1} borderBottomWidth={1} w="180" h="5px"></Box>
            </VStack>
            <VStack flexWrap="wrap">
              <Text w="160" fontSize={12}>{boxdata.content}</Text>
              <Button w="110" h="40px" mt="15px" borderRadius={16} bgColor="#3B5998" >{boxdata.button}</Button>
            </VStack>
          </HStack>
        </Box>
    );
}

export default HomeBigBox1;