import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image} from "native-base"
import { ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Home8Boxes = ({boxdata,navigation}) => {
    
    return( 
        <Center mt="20px" w="80px" mr="10px" ml="10px"h="80px" bgColor="#FFF1CD"  borderRadius={12}>
            <Pressable onPress={()=>alert("FUCK YOU!")}>
                    <Image size={"50px"} resizeMode={"cover"} borderRadius={100} 
                    source={{uri: boxdata.image}} alt={boxdata.title} />
                    <Text fontSize={12}>{boxdata.title}</Text>
            </Pressable>
        </Center>
    );
};


export default Home8Boxes;