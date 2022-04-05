import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import HomeDetailScreen from '../screens/HomeDetialScreen';



const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
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
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen 
        name="Explore" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen 
        name="Personal" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
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
        component={HomeScreen}
        options={{
          title: "",
          headerShadowVisible:false,
          headerStyle:{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            backgroundColor:"#fff",
            shadowOffset:0,
          
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

export default Navigation;