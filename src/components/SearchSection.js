import React from "react";
import { Box,HStack,Text,VStack,ScrollView,Center,Image,Button,SafeAreaView} from "native-base";
import SearchList from "../components/SearchList";
import GuessList from "../components/GuessList";
import popData1 from "../json/search_section.json";
import popData2 from "../json/aspiration_fill.json";
import popData3 from "../json/vocational_school.json";
import guessData from "../json/guess.json";
import SearchBar from "../components/SearchBar";


const SearchSection = ({ navigation }) => {
  return (
  
    <ScrollView  showsVerticalScrollIndicator={false}>
    <Box>
          <Center flex={1} px="2">
      <SearchBar />
    </Center>
    
      <Box my={3}
      >
        <VStack>
        <HStack>
          <Image 
          w='100%' h='200' mb={3} 
          alt="123"
          source={
            {
               uri:
               "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
          } 
          />
        </HStack>
        <Box>
        <HStack  ml={3} mb={4} my={3}>
          <Text fontSize="lg" fontWeight="bold"> 猜你喜歡</Text>
        </HStack>
        </Box>
       
        <HStack>
        <GuessList 
        list={guessData.albumList}
        navigation={navigation}
      />
        </HStack>
        </VStack>
  
      </Box>
      <Box  mb={2} w="100%" 
        _dark={{ bg: "blueGray.900", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }}>
      <HStack mt={2} px={3}>
       <VStack paddingLeft={2} justifyContent="space-around">
        <Image alt="123" source={{uri:"https://docs.nativebase.io/_next/image?url=https%3A%2F%2Fdocs.nativebase.io%2Fimg%2Fnativebaselogo.svg&w=48&q=100"}}width={8} height={8}/>
       </VStack>  
       <VStack paddingLeft={2} justifyContent="space-around"  py={2}>
          <Text bold fontSize="lg">選校</Text>
          <Text>熱門話題</Text>
       </VStack>
       <HStack  w="100%" justifyContent={"flex-end"}alignItems="center" bottom="3" right="-12" position="absolute">
       <VStack mx={30} justifyContent={"center"}>
        <Button onPress={() => console.log("hello world")}>1.3k ▶ </Button>
       </VStack>
       </HStack>
     
      </HStack>
      <SearchList 
        list={popData1.albumList}
        navigation={navigation}
      />
      </Box>

      
      <Box  mb={2} w="100%" 
        _dark={{ bg: "blueGray.900", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }}>
      <HStack mt={2} px={3}>
       <VStack paddingLeft={2} justifyContent="space-around">
        <Image alt="123" source={{uri:"https://docs.nativebase.io/_next/image?url=https%3A%2F%2Fdocs.nativebase.io%2Fimg%2Fnativebaselogo.svg&w=48&q=100"}}width={8} height={8}/>
       </VStack>  
       <VStack paddingLeft={2} justifyContent="space-around"  py={2}>
          <Text bold fontSize="lg">志願選填</Text>
          <Text>熱門話題</Text>
       </VStack>
       <HStack  w="100%" justifyContent={"flex-end"}alignItems="center" bottom="3" right="-12" position="absolute">
       <VStack mx={30} justifyContent={"center"}>
        <Button onPress={() => console.log("hello world")}>1.2k ▶ </Button>
       </VStack>
       </HStack>
     
      </HStack>
      <SearchList 
        list={popData2.albumList}
        navigation={navigation}
      />
      </Box>

      <Box  mb={2} w="100%" 
        _dark={{ bg: "blueGray.900", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        _light={{ bg: "blueGray.50" }}>
      <HStack mt={2} px={3}>
       <VStack paddingLeft={2} justifyContent="space-around">
        <Image alt="123" source={{uri:"https://docs.nativebase.io/_next/image?url=https%3A%2F%2Fdocs.nativebase.io%2Fimg%2Fnativebaselogo.svg&w=48&q=100"}}width={8} height={8}/>
       </VStack>  
       <VStack paddingLeft={2} justifyContent="space-around"  py={2}>
          <Text bold fontSize="lg">高職升學</Text>
          <Text>熱門話題</Text>
       </VStack>
       <HStack  w="100%" justifyContent={"flex-end"}alignItems="center" bottom="3" right="-12" position="absolute">
       <VStack mx={30} justifyContent={"center"}>
        <Button onPress={() => console.log("hello world")}>1.0k ▶ </Button>
       </VStack>
       </HStack>
     
      </HStack>
      <SearchList 
        list={popData3.albumList}
        navigation={navigation}
      />
      </Box>
    </Box>
    </ScrollView>
   
  );
};

export default SearchSection;


