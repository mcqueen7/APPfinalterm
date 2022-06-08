import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack,Image,Pressable, useColorModeValue,} from "native-base"
import { ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DepartmentBoxes = ({boxdata}) => {
  const textColor1=useColorModeValue("#000000","#C9C9C9");
  const textColor2=useColorModeValue("#525252","#989898");
  const navigation = useNavigation(); 
    return( 
      <Pressable onPress={()=>navigation.navigate('DepartmentDetailscreen',boxdata)}>
        <VStack mt="20px" w="120px" mx="15px" h="120px" bgColor="#faedcd"  borderRadius={12} 
            shadow={7} space={4} alignItems="center">        
          <ImageBackground source={{uri:boxdata.image}} resizeMode="cover" style={styles.bg} >           
          </ImageBackground>
        </VStack>
        <Box mt="10px" mx="15px" w="120px" h="60px"  borderRadius={15} >
                <Text textAlign={"left"} fontSize={12} color={textColor1}>{boxdata.label}</Text>
                <Text textAlign={"left"} fontSize={10} color={textColor2}>共{boxdata.number}個科系</Text>
        </Box>
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

export default DepartmentBoxes;