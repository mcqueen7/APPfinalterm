import React from "react";
import {Box,Button,Center,HStack,Text, VStack} from "native-base"


const HomeBigBox1 = ({boxdata}) => {
    console.log(boxdata);
    return( 
        <Box mt="25" w="400" maxW="100%" h="230" bgColor="blue.500" alignItems="center" justifyContent="center">
          <HStack  alignContent="center">
            <Text>{boxdata.title}</Text>
            <VStack flexWrap="wrap">
            <Text >{boxdata.content}</Text>
            <Button w="20" >item.button</Button>
            </VStack>
          </HStack>
        </Box>
    );
}

export default HomeBigBox1;