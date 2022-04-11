import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon, VStack ,Pressable} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PersonalButton = ({ buttondata ,navigation }) => {
    
  return (
    <Pressable onPress={()=>{alert("做不完了還MORE!!!!!!!!");}}>
        <Button bg={"#E8E8E8"} borderRadius={20} w="160" mx={"10px"} my={"15px"}>
            <HStack>
                <MaterialCommunityIcons name={buttondata.icon} size={25}/>
                <Text w="60" textAlign={"center"}>{buttondata.label}</Text>
            </HStack>
        </Button>
    </Pressable> 
  );
};

export default PersonalButton;


