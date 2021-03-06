import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,Pressable, useColorModeValue} from "native-base"
import { ImageBackground } from "react-native";


const SchoolCompletion = ({comdata,navigation}) => {
    const textColor=useColorModeValue("#000000","#000000");
    return( 
        <Pressable onPress={()=>alert("做不完了沒Detai")}>
        <Center w="80px" h="60px" mt="50px" mx="5px" bgColor="#EEEEEE"  borderRadius={12}  shadow={9} >
            <HStack>
                {/* <Image source={{uri: comdata.icon}} alt={comdata.title} size={25} /> */}
                <VStack>
                    <Text fontSize={"10px"} color={textColor}>{comdata.title}</Text>
                    {/* <Text fontSize={"10px"} color={textColor}>已完成:{comdata.completion}%</Text> */}
                </VStack>
            </HStack>
                
        </Center>
        </Pressable>
    );
};


export default SchoolCompletion;