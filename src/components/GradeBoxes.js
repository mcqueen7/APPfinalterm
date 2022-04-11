import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,Pressable} from "native-base"
import { ImageBackground } from "react-native";


const GradeBoxes = ({boxdata,navigation}) => {
    return( 
        <Pressable onPress={()=>alert("做不完了沒Detail")}>
        <Center mt="20px" w="80px" mr="10px" ml="10px"h="80px" bgColor="#92AFEC"  borderRadius={12} 
            shadow={7}>
            <ImageBackground source={boxdata.image} resizeMode="cover" style={styles.bg}>
              <Text textAlign={"center"} fontSize={12} backgroundColor={"amber.400"} borderRadius={5}>{boxdata.label}</Text>
            </ImageBackground>
        </Center>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    bg: {
      flex: 1,
      justifyContent: "center",
      alignContent:"center",
      width:"100%",
      height:"100%",
    },
  });

export default GradeBoxes;