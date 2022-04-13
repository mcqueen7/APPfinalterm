import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image} from "native-base"
import { ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Home8Boxes1 = ({boxdata,navigation}) => {
    return( 
        <Pressable onPress={()=>alert("做不完了沒Detail")}>
        <Center mt="20px" w="80px" mx="10px" h="80px" bgColor="#FFF1CD"  borderRadius={12} 
            shadow={7}>
                    <Image size={"50px"} resizeMode={"cover"} borderRadius={100} 
                    source={{uri: boxdata.image}} alt={boxdata.title} />
                    <Text alignSelf={"center"} fontSize={12}>{boxdata.title}</Text>
        </Center>
        </Pressable>
    );
};


export default Home8Boxes1;