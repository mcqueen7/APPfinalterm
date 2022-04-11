import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,Pressable} from "native-base"
import { ImageBackground } from "react-native";


const GradeCompletion = ({comdata,navigation}) => {
    return( 
        <Pressable onPress={()=>alert("做不完了沒Detail")}>
        <Center mt="20px" w="80px" mr="10px" ml="10px"h="80px" bgColor="#92AFEC"  borderRadius={12} 
            shadow={7}>
                <Text>asdjalsdjljwfilj</Text>
        </Center>
        </Pressable>
    );
};


export default GradeCompletion;