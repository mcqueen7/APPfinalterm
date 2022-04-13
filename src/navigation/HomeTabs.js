import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,Center,HStack,Text, useColorMode} from "native-base"

const Tab2 =  createMaterialTopTabNavigator();

import HomeTraceStack from "./HomeTraceStack";
import HomeAllStack from "./HomeAllStack";
import HomeRecommendStack from "./HomeRecommendStack";


const HomeTabs = () => {
  const{colorMode}=useColorMode();
  return (
      <Tab2.Navigator
      initialRouteName="All"
      screenOptions={{  
        tabBarInactiveTintColor:colorMode=="light"?"#868686":"#E8E8E8",
        tabBarActiveTintColor :colorMode=="light"?"#477CEA":"#FFF1CD",
        tabBarBounces:"true",
        tabBarIndicatorStyle:{
          width:80,
          height:7,
          left:"7%",
          borderRadius:5,
          backgroundColor:colorMode=="light"?"#000000":"#FFF1CD",
        },
        tabBarLabelStyle: { 
          fontSize: 16,
        },
        tabBarStyle:{
          backgroundColor:colorMode=="light"?"#ffffff":"#474747"
        },
      }}
      >
      <Tab2.Screen 
        name="Trace" 
        component={HomeTraceStack} 
        options={{
          title: "追蹤",
        }}
      />
      <Tab2.Screen 
        name="All" 
        component={HomeAllStack}
        options={{
          title: "全部",
        }}
      />
      <Tab2.Screen 
        name="Recommend" 
        component={HomeRecommendStack} 
        options={{
          title: "推薦",
        }}
      />     
    </Tab2.Navigator>
  
  );
}

export default HomeTabs;