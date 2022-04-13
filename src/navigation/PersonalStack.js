import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text, useColorMode} from "native-base"
import HomeTabs from "./HomeTabs";
import PersonalScreen from "../screens/PersonalScreen";

const Stack = createNativeStackNavigator(); 

const PersonalStack = () => {
    const{colorMode}=useColorMode();
    return (
      <Stack.Navigator
        initialRouteName="PersonalScreen"
        screenOptions={{

        }}
      >
        <Stack.Screen
          name="PersonalScreen"
          component={PersonalScreen}
          options={{
            title: "個人",
            headerTitleAlign:"center",
            headerStyle:{
                backgroundColor:colorMode=="light"?"#FFF1CD":"#474747",
                height:"60px",
            },
            headerShadowVisible:{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5},
                shadowOpacity: 0.8,
                elevation: 5, // Android Only
            },
            headerTitleStyle: {
              color:colorMode=="light"?"#000000":"#FFFFFF",
              fontSize:20,
            },
          }}
        />
      </Stack.Navigator>
    );
  }

export default PersonalStack;