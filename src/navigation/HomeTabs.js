import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,Center,HStack,Text} from "native-base"

const Tab2 =  createMaterialTopTabNavigator();

import HomeTraceStack from "./HomeTraceStack";
import HomeAllStack from "./HomeAllStack";
import HomeRecommendStack from "./HomeRecommendStack";


const HomeTabs = () => {
  return (
      <Tab2.Navigator
      initialRouteName="All"
      screenOptions={{  
        tabBarActiveTintColor :"#3B5998",
        tabBarBounces:"true",
        tabBarIndicatorContainerStyle:{
          // textAlign:"center",
          // alignContent:"center",
          // flex:1,
          // alignContent:"center",
          // justifyContent:"center",
        },
        tabBarIndicatorStyle:{
          width:80,
          height:7,
          left:"7%",
          borderRadius:5,
          // flex:1,
          // alignContent:"center",
          // justifyContent:"center",
          // textAlign:"center",
          // marginLeft:50,
        },
        tabBarLabelStyle: { 
          fontSize: 16,
        },
        tabBarStyle:{
          backgroundColor:"#ffffff"
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