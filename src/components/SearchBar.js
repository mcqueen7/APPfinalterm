import React from "react";
import { Box,VStack,Divider,Heading,Input,Icon} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SearchBar = () => {
    return <VStack my="2" space={5} w="100%" maxW="500px" divider={<Box px="2">
    <Divider />
  </Box>}>

<VStack w="100%" space={3} alignSelf="center">
  {/* <Heading fontSize="lg">Material</Heading> */}
  <Input placeholder="搜尋" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="dark.100" as={<MaterialCommunityIcons name="magnify" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="dark.100" as={<MaterialCommunityIcons name="microphone" />} />} />
</VStack>
</VStack>;
}
  ;
  
  export default SearchBar;