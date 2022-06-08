import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text,useColorModeValue} from "native-base"
import HomeAllScreen from "../screens/HomeAllScreen"
import HomeDetailScreen from "../screens/HomeDetailScreen"
import TaipeiSchoolDetailScreen from "../screens/TaipeiSchoolDetailScreen"
import DepartmentDetailScreen from "../screens/DepartmentDetailScreen"
import PomodoroTimerscreen from "../components/PomodoroTimer"
const Stack = createNativeStackNavigator(); 


const HomeAllStack = () => {
  const BG=useColorModeValue("#FFFFFF","#313131");
  const textColor1=useColorModeValue("#000000","#ECECEC");
    return (
      <Stack.Navigator screenOptions={
          {
            headerStyle:{
              backgroundColor:BG,
            },
            headerTintColor:textColor1,
          }
      }>
      
        <Stack.Screen 
          name="HomeAllscreen" 
          component={HomeAllScreen}
          options={
            {headerShown:false}
          
        }       
        />
        <Stack.Screen 
          name="HomeDetailscreen" 
          component={HomeDetailScreen}
          options={
            {headerShown:true}   
          }
        />
          <Stack.Screen 
          name="TaipeiSchoolDetailscreen" 
          component={TaipeiSchoolDetailScreen}
          options={
            {headerShown:true}
        }      
         
        />
        <Stack.Screen 
          name="DepartmentDetailscreen" 
          component={DepartmentDetailScreen}
          options={
            {headerShown:true}
        }              
        />
        <Stack.Screen 
          name="PomodoroTimerscreen" 
          component={PomodoroTimerscreen}
          options={
            {headerShown:true}
        }              
        />
      </Stack.Navigator>

    );
  }

export default HomeAllStack;

