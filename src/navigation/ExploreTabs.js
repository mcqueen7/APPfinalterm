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


const ExploreTabs = () => {
  return (
      <Tab2.Navigator
      initialRouteName="Gradeone"
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
          // flex:1,
          // alignContent:"center",
          // justifyContent:"center",
          // textAlign:"center",
          // marginLeft:50,
        },
        tabBarLabelStyle: { 
          fontSize: 20,
        },
        tabBarStyle:{
          backgroundColor:"#ffffff"
        },
      }}
      >
      <Tab2.Screen 
        name="Gradeone" 
        component={GradeoneStack} 
        options={{
          title: "高一",
          
        }}
      />
      <Tab2.Screen 
        name="Gradetwo" 
        component={GradetwoStack}
        options={{
          title: "高二",
        }}
      />
      <Tab2.Screen 
        name="Gradethree" 
        component={GradethreeStack} 
        options={{
          title: "高三",
        }}
      />     
    </Tab2.Navigator>
  
  );
}

export default ExploreTabs;