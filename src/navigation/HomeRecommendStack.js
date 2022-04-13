import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text,Center} from "native-base"

const HomeRecommendStack = () => {
    return (
    <Center h="100%" bgColor={"blue.100"}>
      <Text fontSize={100} textAlign={"center"}>Recommend PAGE</Text>
    </Center>
    );
  }
export default HomeRecommendStack;