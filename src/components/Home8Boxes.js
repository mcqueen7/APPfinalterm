import React from "react";
import { StyleSheet} from "react-native";
import {Box,Button,Center,HStack,Text, VStack} from "native-base"
import { ImageBackground } from "react-native";

const Home8Boxes = ({boxdata}) => {
    return( 
        <Box mt="30" w="380" ml="10" maxW="100%" h="180" bgColor="blue.500" alignItems="center" justifyContent="center" flex={1} flexWrap="wrap">
         
        </Box>
    );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignContent:"center",
    width:400,
    height: 230,
  },
});


export default Home8Boxes;