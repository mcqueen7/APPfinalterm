import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text} from "native-base"

const Stack = createNativeStackNavigator();
const Tab =  createMaterialBottomTabNavigator();
const Tab2 =  createMaterialTopTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import HomeDetailScreen from '../screens/HomeDetialScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <BigTabs />
    </NavigationContainer>
  );
}

const BigTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#3B5998',
        headerShown: false,
        lazy:"false",
      }}
      shifting={true}
      labeled={true}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeTabs}
        options={{
          headerShown: true,
          title: "Home",
          tabBarBadge:7,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor:"#3B5998",
          
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
          tabBarColor:"#3B5978",
          
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "Create",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
          tabBarColor:"#3B5958",
        }}
      />
        <Tab.Screen 
        name="Explore" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),tabBarColor:"#3B5938",
        }}
      />
        <Tab.Screen 
        name="Personal" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "Personal",
          tabBarBadge:"99+",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),tabBarColor:"#3B5918",
        }}
      />
    </Tab.Navigator>
  );
}
const HomeTabs = () => {
  return (
   
    <Tab2.Navigator
      initialRouteName="All"
      screenOptions={{  
        headerShown: false,
        tabBarActiveTintColor :'#3B5998',
        headerStyle:{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          backgroundColor:"#fff",
          shadowOffset:0,
          height:200,
        },
      }}
    >
      <Tab2.Screen 
        name="Trace" 
        component={HomeTraceStack} 
        options={{
          headerShown: true,
          title: "追蹤",
        }}
      />
      <Tab2.Screen 
        name="All" 
        component={HomeAllStack}
        options={{
          headerShown: true,
          title: "全部",
        }}
      />
      <Tab2.Screen 
        name="Recommend" 
        component={HomeRecommendStack} 
        options={{
          headerShown: true,
          title: "推薦",
         
        }}
      />
    </Tab2.Navigator>
  );
}

const HomeStack = ({navigation}) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
      setToggle(!toggle);
  };
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Home"
        component={HomeAllStack}
        options={{
          title: "",
          headerShadowVisible:false,
          headerStyle:{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            backgroundColor:"#fff",
            shadowOffset:0,
          
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={24}
              onPress={() => alert("Search")}
              style={{ marginRight: 16 }}
            />
          ),
          
        }}
      />
      <Stack.Screen
        name="Detail"
        component={HomeDetailScreen}
        options={({ route }) => ({
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() =>navigation.goBack(null)}
              style={{ marginLeft: 8 }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => toggleFunction()}>
            {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} />:
                            <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}   
            </Pressable>

          ),
          backgroundColor:'#fff',
        })}
      />
    </Stack.Navigator>
  );
}
const HomeTraceStack = () => {
  return (
    <Box>
      <Text>TRACE ASS</Text>
    </Box>
  );
}
const HomeAllStack = () => {
  return (
    <Box alignSelf={"center"}>
      <Text>HOME ASS</Text>
      <HStack>
        <Box bg="primary.300"><Text>1</Text></Box>
        <Box bg="primary.500"><Text>2</Text></Box>
        <Box bg="primary.600"><Text>3</Text></Box>
        <Box bg="primary.700"><Text>4</Text></Box>
      </HStack>
    </Box>
  );
}
const HomeRecommendStack = () => {
  return (
    <Box>
      <Text> RE ASS</Text>
    </Box>
  );
}

export default Navigation;