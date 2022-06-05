import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon, VStack ,Pressable,useColorMode, useColorModeValue} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { signOut } from "../redux/accountSlice";
import { useDispatch } from "react-redux";



const PersonalButton = ({ buttondata ,navigation}) => {
  const dispatch = useDispatch();
  const{colorMode, toggleColorMode}=useColorMode();
  const buttonBG=useColorModeValue("#E8E8E8","#393939"); 
  const iconColor2=useColorModeValue("#000000","#ffffff");
  return (
        <Button bgColor={buttonBG} borderRadius={20} w="160" mx={"10px"} my={"15px"}
          onPress={()=>{
            console.log(buttondata.type);
            switch(buttondata.type){
                case "darkmode":
                  //alert("switch darkmode");
                  toggleColorMode();
                  break;
                case "logout":
                  dispatch(signOut());
                  break;
                default:   
                  alert("做不完了還MORE!!!!!!!!");
                  break;
            }

          }}
        >
            <HStack>
                <MaterialCommunityIcons name={buttondata.icon} size={25} color={iconColor2}/>
                <Text w="60" textAlign={"center"}>{buttondata.label}</Text>
            </HStack>
        </Button>
  );
};

export default PersonalButton;


