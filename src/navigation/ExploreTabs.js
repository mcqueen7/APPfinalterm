import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,Center,HStack,StatusBar,Text, useColorMode} from "native-base"


import Grade1Stack from "./Grade1Stack";
import Grade2Stack from "./Grade1Stack";
import Grade3Stack from "./Grade1Stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const Tab2 =  createMaterialTopTabNavigator();

const ExploreTabs = () => {
  const{colorMode}=useColorMode();
  return (
  
    <SafeAreaProvider>
      <Tab2.Navigator
      initialRouteName="Grade1"
      
      screenOptions={{  
        tabBarInactiveTintColor:colorMode=="light"?"#868686":"#E8E8E8",
        tabBarActiveTintColor:colorMode=="light"?"#477CEA":"#FFF1CD",
        tabBarBounces:"true",
        swipeEnabled:false,
        tabBarIndicatorStyle:{
          width:80,
          height:7,
          left:"7%",
          borderRadius:5,
          backgroundColor:colorMode=="light"?"#000000":"#FFF1CD",
        },
        tabBarLabelStyle: { 
          fontSize: 20,
        },
        tabBarStyle:{
          backgroundColor:colorMode=="light"?"#ffffff":"#474747",
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