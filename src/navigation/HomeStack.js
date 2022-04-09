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
import HomeScreen from "../screens/HomeScreen";
import HomeAllStack from "./HomeAllStack";
const Stack = createNativeStackNavigator(); 

const HomeStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
        //   headerShown: true
        }}
      >
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            title: "ColleGo",
            headerTitleAlign:"center",
            headerShadowVisible:false,
            headerStyle:{
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              backgroundColor:"#fff",
            //   shadowOffset:0,
            },
            headerLeft: () => (
              <MaterialCommunityIcons
                name={'menu'}
                size={24}
                onPress={() => alert("Drawer")}
                style={{ marginLeft: 16 }}
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons
                name={'bell-outline'}
                size={24}
                onPress={() => alert("Search")}
                style={{ marginRight: 16 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

export default HomeStack;