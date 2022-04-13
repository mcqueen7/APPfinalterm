import React from "react";
import { Box,VStack,Divider,Heading,Input,Icon} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SearchBar = () => {
    return (
    <VStack my="2" space={5} w="100%" maxW="500px">

    <VStack w="100%" space={3} alignSelf="center">
      <Input placeholder="搜尋" width="100%" borderRadius={20} py="3" px="1" fontSize="16" bgColor={"#E8E8E8"} placeholderTextColor={"black"}
        InputLeftElement={<Icon m="2" mr="3" size="6" color={"black"} as={<MaterialCommunityIcons name="magnify" />} />} 
        InputRightElement={<Icon m="2" mr="3" size="6"color={"black"} as={<MaterialCommunityIcons name="microphone" />} />} 
      /> 
    </VStack>
  </VStack>
    );
}
  
  export default SearchBar;