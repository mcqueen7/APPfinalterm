import React from "react";
import { Box,HStack,Text,VStack,ScrollView,Center,Image,Button,SafeAreaView, SectionList, Heading, Pressable, FlatList, useColorModeValue} from "native-base";

import GuessBoxes from "./GuessBoxes";
import SearchBar from "../components/SearchBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import sections from "../json/search_section.json"
import SearchBoxes from "./SearchBoxes";

console.log(sections[0].title);

const SearchSection = ({ navigation }) => {
  const BGColor=useColorModeValue("#FFFFFF","#000000");
  const hashtag=useColorModeValue("#000000","#FFFFFF");
  const renderSectionHeader = ({section}) => {
    switch (section.title){
      case "搜尋": return <Center flex={1} px="2"><SearchBar /></Center>
      case "carousel": return (
        <Image 
        w='100%' h='200' alt="carousel"
        source={{
             uri:
             "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }} 
        />
      )
      case "猜你喜歡": return (
          <>
              <HStack mx={5} mt={10} mb={5}><Heading fontSize="24" >{section.title}</Heading>
              </HStack>
              <>
              <FlatList
                  scrollEnabled={false}
                  numColumns={4}
                  // horizontal={true}
                  data={section.data}
                  renderItem={({ item }) => <GuessBoxes boxdata={item} navigation={navigation}/>}
                  showsHorizontalScrollIndicator={false}
                  stickySectionHeadersEnabled={false}
                  keyExtractor={ item => item.label}
                  alignItems={"center"}
              />
              </>
          </>
      )
      default: return (
        <>
          <HStack px={3} mt="10px" mb={2}justifyContent="space-between" alignItems="center">
          <HStack>
            <VStack paddingLeft={2} justifyContent="space-around">
              <Center padding={2} borderWidth={2} borderColor={hashtag} borderRadius={100}><MaterialCommunityIcons name="pound" color={hashtag} size={25} /></Center>
            </VStack>  
            <VStack paddingLeft={2} justifyContent="space-around"  py={2}>
              <Text bold fontSize="lg">{section.title}</Text>
              <Text>{section.subtitle}</Text>
            </VStack>
          </HStack>
            
          <Button onPress={() => console.log("87")} bgColor={"#477CEA"} h={"40px"}>{`${section.article_num}  ▶`}</Button>
          </HStack>
          <>
          <FlatList
              horizontal={true}
              data={section.data}
              renderItem={({ item }) => <SearchBoxes boxdata={item} navigation={navigation}/>}
              showsHorizontalScrollIndicator={false}
              stickySectionHeadersEnabled={false}
              keyExtractor={ item => item.image}
          />
          </>
        </>
      )

    } 
  };
  const renderItem = ({item,section}) => {
   return null
   
  };

  return (
    
   <SectionList w="100%"  h="100%"  bgColor={"white"}
   paddingTop="20px"
   sections={sections} 
   contentContainerStyle={{ paddingHorizontal: 7 }}
   stickySectionHeadersEnabled={false}
   showsVerticalScrollIndicator={false}
   showsHorizontalScrollIndicator={false}
   keyExtractor={(item,index) => item+index} 
   renderSectionHeader={renderSectionHeader} 
   renderItem={renderItem} 
   backgroundColor={BGColor}
   />
 
  );
};

export default SearchSection;


