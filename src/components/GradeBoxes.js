import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,Pressable} from "native-base"
import { ImageBackground } from "react-native";


const GradeBoxes = ({boxdata,navigation}) => {
    return( 
        <Pressable onPress={()=>alert("做不完了沒Detail")}>
        <Center mt="20px" w="160px" mx="12px" h="160px" bgColor="#92AFEC"  borderRadius={12} 
            shadow={7}>
            <ImageBackground source={{uri:boxdata.image}} resizeMode="cover" style={styles.bg} >
              <Center mt="100px" w="130" h="30px" backgroundColor={"#FFF1CD"} borderRadius={15} >
                <Text textAlign={"center"} fontSize={12} >{boxdata.label}</Text>
              </Center>
            </ImageBackground>
        </Center>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    bg: {
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      width:"100%",
      height:"100%",
      
    },
  });

export default GradeBoxes;