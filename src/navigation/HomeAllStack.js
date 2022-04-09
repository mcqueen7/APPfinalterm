import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text} from "native-base"

const HomeAllStack = () => {
  
    return (
      <Box alignSelf={"center"}>
        <Text>ALL</Text>
        <HStack>
          <Box bg="primary.300"><Text>1</Text></Box>
          <Box bg="primary.500"><Text>2</Text></Box>
          <Box bg="primary.600"><Text>3</Text></Box>
          <Box bg="primary.700"><Text>4</Text></Box>
        </HStack>
      </Box>
    );
  }

export default HomeAllStack;