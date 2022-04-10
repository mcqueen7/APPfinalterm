import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text} from "native-base"
import HomeTabs from "./HomeTabs";
import PersonalScreen from "../screens/PersonalScreen";
const Stack = createNativeStackNavigator(); 

const PersonalStack = () => {
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
                backgroundColor:"#FFF1CD",
            },
            headerShadowVisible:{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5},
                shadowOpacity: 0.8,
                elevation: 5, // Android Only
            },
            headerTitleStyle: {
              fontSize:40,
            },
          }}
        />
      </Stack.Navigator>
    );
  }

export default PersonalStack;