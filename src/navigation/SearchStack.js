import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text} from "native-base"
import HomeAllScreen from "../screens/HomeAllScreen"
const Stack = createNativeStackNavigator(); 


const SearchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeAllscreen" 
          component={HomeAllScreen}
          options={
            {headerShown:false}
        }
        
        />
      </Stack.Navigator>

    );
  }

export default SearchStack;

