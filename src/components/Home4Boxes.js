import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,useColorModeValue, Flex} from "native-base"
import { ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from '@react-navigation/native';

const Home4Boxes = ({boxdata}) => {
    const textColor=useColorModeValue("#000000","#000000");
    const BGcolor=useColorModeValue("#F4F4F4","#6E6E6E");
    const navigation = useNavigation(); 
    const image = { uri:"https://raw.githubusercontent.com/mcqueen7/APPmidterm/master/src/images/science_icon.png" };
    return( 
        <Flex direction="row"flex={1} flexWrap="wrap" justifyContent="center" alignItems="center">
            
            
            <Center w="40%" h="160px" mx="3" my="2"bgColor={BGcolor} borderRadius={12}>
                <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                <VStack justifyContent={"center"} alignItems={"center"}> 
                        {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                            <Center>
                                <Text h="40" W="40" fontSize={16} _dark={{color:"black"}}>{boxdata[0].title}</Text>
                            </Center>
                        </ImageBackground> */}
                        <Box my="2" h="60" w="130" bgColor={"#AFDDE9"} borderRadius={12} justifyContent={"center"} alignItems={"center"}>
                            <Text  fontSize={16} _dark={{color:"black"}}>{boxdata[0].title}</Text>
                        </Box>
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        
                        <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                            <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        </Pressable>          
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </VStack>   
                </Pressable>
            </Center>
            <Center w="40%" h="160px" mx="3" my="2"bgColor={BGcolor} borderRadius={12}>
                <VStack justifyContent={"center"} alignItems={"center"}> 
                        {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                            <Center>
                                <Text h="40" W="40" fontSize={16} _dark={{color:"black"}}>{boxdata[0].title}</Text>
                            </Center>
                        </ImageBackground> */}
                        <Box my="2" h="60" w="130" bgColor={"#AFDDE9"} borderRadius={12} justifyContent={"center"} alignItems={"center"}>
                            <Text  fontSize={16} _dark={{color:"black"}}>{boxdata[1].title}</Text>
                        </Box>
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </VStack>   
            </Center>
            <Center w="40%" h="160px" mx="3" my="2"bgColor={BGcolor} borderRadius={12}>
                <VStack justifyContent={"center"} alignItems={"center"}> 
                        {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                            <Center>
                                <Text h="40" W="40" fontSize={16} _dark={{color:"black"}}>{boxdata[0].title}</Text>
                            </Center>
                        </ImageBackground> */}
                        <Box my="2" h="60" w="130" bgColor={"#AFDDE9"} borderRadius={12} justifyContent={"center"} alignItems={"center"}>
                            <Text  fontSize={16} _dark={{color:"black"}}>{boxdata[2].title}</Text>
                        </Box>
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </VStack>   
            </Center>
            <Center w="40%" h="160px" mx="3" my="2"bgColor={BGcolor} borderRadius={12}>
                <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                <VStack justifyContent={"center"} alignItems={"center"}> 
                        {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                            <Center>
                                <Text h="40" W="40" fontSize={16} _dark={{color:"black"}}>{boxdata[0].title}</Text>
                            </Center>
                        </ImageBackground> */}
                        <Box my="2" h="60" w="130" bgColor={"#AFDDE9"} borderRadius={12} justifyContent={"center"} alignItems={"center"}>
                            <Text  fontSize={16} _dark={{color:"black"}}>{boxdata[3].title}</Text>
                        </Box>
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </VStack>   
                </Pressable>
            </Center>
          



        </Flex>
    );
};
const styles = StyleSheet.create({
    bg: {
      flex: 1,
      justifyContent: "center",
      alignContent:"center",
      width: "80%",
      height:"80%",
      
      
    },
  });

export default Home4Boxes;