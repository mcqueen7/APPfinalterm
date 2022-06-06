import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,Pressable, useColorModeValue} from "native-base"
import { ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

const GradeBoxes = ({boxdata}) => {
  const textColor1=useColorModeValue("#000000","#000000");
  const navigation = useNavigation(); 
    return( 
        <Pressable onPress={()=>navigation.navigate('TaipeiSchoolDetailscreen',boxdata)}>
        <Center mt="20px" w="160px" mx="15px" h="160px" bgColor="#92AFEC"  borderRadius={12} 
            shadow={7}>
            <ImageBackground source={{uri:boxdata.image}} resizeMode="cover" style={styles.bg} >
              <Center mt="100px" w="130" h="30px" backgroundColor={"#FFF1CD"} borderRadius={15} >
                <Text textAlign={"center"} fontSize={12} color={textColor1}>{boxdata.label}</Text>
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