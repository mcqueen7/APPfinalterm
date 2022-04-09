// import React, {useState} from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
// import {Box,HStack,Text} from "native-base"

// const Stack = createNativeStackNavigator();
// const Tab =  createMaterialBottomTabNavigator();
// const Tab2 =  createMaterialTopTabNavigator();

// import HomeScreen from '../screens/HomeScreen';
// import HomeDetailScreen from '../screens/HomeDetailScreen';


// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <BigTabs />
//     </NavigationContainer>
//   );
// }

// const BigTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: '#3B5998',
//         headerShown: false,
//         lazy:"false",
//       }}
//       shifting={true}
//       labeled={true}
//     >
//       <Tab.Screen 
//         name="Home" 
//         component={HomeTabs}
//         options={{
//           title: "Home",
//           tabBarBadge:7,
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//           tabBarColor:"#3B5998",
//         }}
//       />
//       <Tab.Screen 
//         name="Wishlist" 
//         component={HomeDetailScreen} 
//         options={{
//           title: "Wishlist",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bookmark" color={color} size={26} />
//           ),
//           tabBarColor:"#3B5998",
          
//         }}
//       />
//       <Tab.Screen 
//         name="Create" 
//         component={HomeDetailScreen} 
//         options={{
//           title: "Create",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="book-open" color={color} size={26} />
//           ),
//           tabBarColor:"#3B5998",
//         }}
//       />
//         <Tab.Screen 
//         name="Explore" 
//         component={HomeDetailScreen} 
//         options={{
//           title: "Explore",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="book-open" color={color} size={26} />
//           ),tabBarColor:"#3B5998",
//         }}
//       />
//         <Tab.Screen 
//         name="Personal" 
//         component={HomeDetailScreen} 
//         options={{
//           title: "Personal",
//           tabBarBadge:"99+",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="book-open" color={color} size={26} />
//           ),tabBarColor:"#3B5998",
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// const HomeTabs = () => {
//   return (
//     <Tab2.Navigator
//       initialRouteName="All"
//       screenOptions={{  
//         tabBarActiveTintColor :'#3B5998',
//       }}
//     >
//       <Tab2.Screen 
//         name="Trace" 
//         component={HomeTraceStack} 
//         options={{
//           title: "追蹤",
//         }}
//       />
//       <Tab2.Screen 
//         name="All" 
//         component={HomeAllStack}
//         options={{
//           title: "全部",
//         }}
//       />
//       <Tab2.Screen 
//         name="Recommend" 
//         component={HomeRecommendStack} 
//         options={{
//           title: "推薦",
//         }}
//       />
//     </Tab2.Navigator>
//   );
// }

// const HomeTraceStack = () => {
//   return (
//     <Stack.Navigator
//       // screenOptions={{
//       //   headerShown: false
//       // }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: "",
//           headerShown:false,
          
//         }}
//       />
//       <Stack.Screen
//         name="Detail"
//         component={HomeDetailScreen}
//         options={({ route }) => ({
//           title: "",
//           headerShadowVisible:false,
//           headerStyle: {
//             backgroundColor: '#fff',

//           },
//           headerTintColor: '#000',
//           headerTitleStyle: {
//             fontWeight: '400',
//             fontSize: 20
//           },
//           headerLeft: () => (
//             <MaterialCommunityIcons
//               name={'chevron-left'}
//               size={30}
//               onPress={() =>navigation.goBack(null)}
//               style={{ marginLeft: 8 }}
//             />
//           ),
//           headerRight: () => (
//             <Pressable onPress={() => toggleFunction()}>
//             {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} />:
//                             <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
//         </Pressable>
//           ),
//           backgroundColor:'#fff',
//         })}
//       />
//     </Stack.Navigator>
//   );
// }
// const HomeAllStack = () => {
//   return (
//     <Box alignSelf={"center"}>
//       <Text>ALL</Text>
//       <HStack>
//         <Box bg="primary.300"><Text>1</Text></Box>
//         <Box bg="primary.500"><Text>2</Text></Box>
//         <Box bg="primary.600"><Text>3</Text></Box>
//         <Box bg="primary.700"><Text>4</Text></Box>
//       </HStack>
//     </Box>
//   );
// }
// const HomeRecommendStack = () => {
//   return (
//     <Box>
//       <Text>RE</Text>
//     </Box>
//   );
// }

// export default Navigation;