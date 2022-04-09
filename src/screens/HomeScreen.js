import React from "react";
import { Box,Text } from "native-base";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeTabs from "../navigation/HomeTabs";
import { Header } from "react-native/Libraries/NewAppScreen";

const Tab2 =  createMaterialTopTabNavigator();


const HomeScreen = ({ navigation }) => {
  return (

      <HomeTabs />
  );
};

export default HomeScreen;
