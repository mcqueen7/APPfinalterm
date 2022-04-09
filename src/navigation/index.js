import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';

import BigTabs from "./BigTabs";

const Navigation = () => {
  return (
    <NavigationContainer>
      <BigTabs />
    </NavigationContainer>
  );
}


export default Navigation;