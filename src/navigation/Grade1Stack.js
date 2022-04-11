import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Box,HStack,Text} from "native-base"
import Grade1Screen from "../screens/Grade1Screen";

const Stack = createNativeStackNavigator(); 

const Grade1Stack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Grade1screen" 
          component={Grade1Screen}
          options={
            {headerShown:false}
        }
        />
      </Stack.Navigator>

    );
  }

export default Grade1Stack;

