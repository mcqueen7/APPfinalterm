import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text, useColorMode} from "native-base"

const Stack = createNativeStackNavigator();
// const Tab =  createMaterialBottomTabNavigator();   //trash navigator full of bugs
const Tab =  createBottomTabNavigator();         //normal navigator

import HomeDetailScreen from '../screens/HomeDetailScreen';
import HomeStack from "./HomeStack";
import HomeTraceStack from "./HomeTraceStack";
import PersonalStack from "./PersonalStack";
import ExploreTabs from "./ExploreTabs";
import SearchScreen from "../screens/SearchScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import NullScreen from "../screens/NullScreen";
import ActionButton from "../components/ActionButton";

const BigTabs = () => {
  const{colorMode}=useColorMode();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
         tabBarActiveTintColor: colorMode=="light"?"#477CEA": "#FFF1CD",
         tabBarInactiveTintColor: colorMode=="light"?"#000000": "#E8E8E8",
         tabBarStyle:{
          backgroundColor:colorMode=="light"?"#ffffff": "#474747",},
        lazy:true,
        headerShown:false,
        
      }}
      shifting={true}
      labeled={true}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          title: "Home",
          // tabBarBadge:7,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarColor:"#3B5998", //for material
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={30} />
          ),
          tabBarColor:"#415fa6", //for material
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={NullScreen} 
        options={{
          title: "Create",
          tabBarIcon: () => ( <ActionButton />
          ),
          tabBarColor:"#4666b3", //for material
        }}
      />
        <Tab.Screen 
        name="Explore" 
        component={ExploreTabs} 
        options={{
          title: "Explore",
          tabBarBadge:"7",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="playlist-edit" color={color} size={30} />
          ),tabBarColor:"#4b6ebf", //for material
        }}
      />
        <Tab.Screen 
        name="Personal" 
        component={PersonalStack} 
        options={{
          title: "Personal",
          headerShown:false,
          tabBarBadge:"99+",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),tabBarColor:"#5075cc", //for material
        }}
      />
    </Tab.Navigator>
    
  );
}


export default BigTabs;