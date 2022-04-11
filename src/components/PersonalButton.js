import React from "react";
import { Box,Text,HStack, FlatList, Center, Image, Button, Icon, VStack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PersonalButton = ({ buttondata ,navigation }) => {
    
  return (
        <Button bg={"#E8E8E8"} borderRadius={20}>
            <HStack>
                <Text>asdasdasdsadasd</Text>
                <MaterialCommunityIcons name={buttondata.icon} size={25} />
                <Text>{buttondata.label}</Text>
            </HStack>
        </Button>
  );
};

export default PersonalButton;


