import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,Center,HStack,StatusBar,Text} from "native-base"


import Grade1Stack from "./Grade1Stack";
import Grade2Stack from "./Grade1Stack";
import Grade3Stack from "./Grade1Stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const Tab2 =  createMaterialTopTabNavigator();




const ExploreTabs = () => {
  return (
  
    <SafeAreaProvider>
      <Tab2.Navigator
      initialRouteName="Grade1"
      
      screenOptions={{  
        tabBarActiveTintColor :"#3B5998",
        tabBarBounces:"true",
        swipeEnabled:false,
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
          fontSize: 20,
        },
        tabBarStyle:{
          backgroundColor:"#ffffff",
          height:70,
          paddingTop:10,
        },
      }}
      >
      <Tab2.Screen 
        name="Grade1" 
        component={Grade1Stack} 
        options={{
          title: "高一",
          
        }}
      />
      <Tab2.Screen 
        name="Grade2" 
        component={Grade2Stack}
        options={{
          title: "高二",
        }}
      />
      <Tab2.Screen 
        name="Grade3" 
        component={Grade3Stack} 
        options={{
          title: "高三",
        }}
      />     
    </Tab2.Navigator>
    </SafeAreaProvider>
  );
}

export default ExploreTabs;