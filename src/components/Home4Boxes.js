import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,useColorModeValue, Flex} from "native-base"
import { ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from '@react-navigation/native';

const Home4Boxes = ({boxdata}) => {
    const textColor=useColorModeValue("#000000","#000000");
    const BGcolor=useColorModeValue("#F2F2F2","#6E6E6E");
    const navigation = useNavigation(); 
    const image = { uri:"https://raw.githubusercontent.com/mcqueen7/APPmidterm/master/src/images/science_icon.png" };
    return( 
        <Flex direction="row"flex={1} flexWrap="wrap" justifyContent="center" alignItems="center">
            
            
            <Box w="100%" h="120px" mx="3" my="2" justifyContent={"center"} bgColor={BGcolor} borderRadius={12}>
                <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                <HStack justifyContent={"flex-start"} alignItems={"center"}> 
                      
                 {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                </ImageBackground> */}
                        
                <VStack my="5" h="60" w="200"  ml="30" borderRadius={12} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Box my="1">
                                <Text bold fontSize={20} _dark={{color:"#232323"}}>{boxdata[0].title}</Text>
                            </Box>                          
                            <Text fontSize={12} _dark={{color:"#525252"} }>{boxdata[0].detail}</Text>
                </VStack>
                      
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        
                        <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                            <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        </Pressable>          
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </HStack>   
                </Pressable>
            </Box>
            <Box w="100%" h="120px" mx="3" my="2" justifyContent={"center"} bgColor={BGcolor} borderRadius={12}>
                <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                <HStack justifyContent={"flex-start"} alignItems={"center"}> 
                      
                 {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                </ImageBackground> */}
                        
                <VStack my="5" h="60" w="200"  ml="30" borderRadius={12} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Box my="1">
                                <Text bold fontSize={20} _dark={{color:"#232323"}}>{boxdata[1].title}</Text>
                            </Box>                          
                            <Text fontSize={12} _dark={{color:"#525252"} }>{boxdata[1].detail}</Text>
                </VStack>
                      
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        
                        <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                            <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        </Pressable>          
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </HStack>   
                </Pressable>
            </Box>
            <Box w="100%" h="120px" mx="3" my="2" justifyContent={"center"} bgColor={BGcolor} borderRadius={12}>
                <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                <HStack justifyContent={"flex-start"} alignItems={"center"}> 
                      
                 {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                </ImageBackground> */}
                        
                <VStack my="5" h="60" w="200"  ml="30" borderRadius={12} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Box my="1">
                                <Text bold fontSize={20} _dark={{color:"#232323"}}>{boxdata[2].title}</Text>
                            </Box>                          
                            <Text fontSize={12} _dark={{color:"#525252"} }>{boxdata[2].detail}</Text>
                </VStack>
                      
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        
                        <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                            <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        </Pressable>          
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </HStack>   
                </Pressable>
            </Box>
            <Box w="100%" h="120px" mx="3" my="2" justifyContent={"center"} bgColor={BGcolor} borderRadius={12}>
                <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                <HStack justifyContent={"flex-start"} alignItems={"center"}> 
                      
                 {/* <ImageBackground source={image} resizeMode="contain" style={styles.bg} imageStyle={{borderRadius:10}}> 
                </ImageBackground> */}
                        
                <VStack my="5" h="60" w="200"  ml="30" borderRadius={12} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <Box my="1">
                                <Text bold fontSize={20} _dark={{color:"#232323"}}>{boxdata[3].title}</Text>
                            </Box>                          
                            <Text fontSize={12} _dark={{color:"#525252"} }>{boxdata[3].detail}</Text>
                </VStack>
                      
                    {/* <Flex direction="row" flexWrap={"wrap"} alignItems="center" justifyContent="center">
                        
                        <Pressable onPress={()=>navigation.navigate('HomeDetailscreen',boxdata)}>
                            <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立大學</Text></Box>
                        </Pressable>          
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立大學</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>國立科大</Text></Box>
                        <Box w="60" h="30px" mx="1" my="1" bgColor={"#FFF1CD"} borderRadius={12} alignItems="center" justifyContent="center"><Text fontSize={"12px"} color={textColor}>私立科大</Text></Box>
                    </Flex> */}
                </HStack>   
                </Pressable>
            </Box>
          



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