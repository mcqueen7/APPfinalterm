import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image} from "native-base"
import { ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Home8Boxes2 = ({boxdata,navigation}) => {
    const image = { uri:`${boxdata.image}` };
    return( 
        <Pressable onPress={()=>alert("做不完了沒Detail")}>
        <Center mt="20px" w="80px" mr="10px" ml="10px"h="80px" bgColor="#92AFEC"  borderRadius={12} 
            shadow={7}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bg}>
              <Text alignSelf={"center"} fontSize={16}>{boxdata.title}</Text>
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

export default Home8Boxes2;