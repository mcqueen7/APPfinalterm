import React from "react";
import {  Center, HStack, Button, Text, Switch } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { selectArticleNum, setArticleNum } from "../redux/articleNumSlice";


const ReduxTestScreen = ({ navigation }) => {
    const artcount = useSelector(selectArticleNum);
    // Define a dispatch to send actions
    const dispatch = useDispatch();
  return (
   
    <Center flex={1} bg={"light" == "light" ? "white" : "black"}>
    <HStack space={20}>
      <Button borderRadius={0} width={70} onPress={() => dispatch(setArticleNum(artcount + 1))}>
        <Text fontSize={40} color={"light" == "light" ? "white" : "black"}>+</Text>
      </Button>
      <Button borderRadius={0} width={70} onPress={() => dispatch(setArticleNum(artcount - 1))}>
        <Text fontSize={40} color={"light" == "light" ? "white" : "black"}>-</Text>
      </Button>
    </HStack>
    <Text fontSize={40} mt={20} color={"light" == "dark" ? "white" : "black"}>
      {artcount}
    </Text>
    <HStack mt={20} space={8} alignItems="center" >
      <Text fontSize="lg" color={"light" == "dark" ? "white" : "black"}>
        {"light" == "light" ? "Light Mode" : "Dark Mode"}
      </Text>
      <Switch
        name="light Mode"
        isChecked={"light" === "light"}
        onToggle={() => alert("FUXKYOU")}
        accessibilityLabel="display-mode"
        accessibilityHint="light or dark mode"
      />
    </HStack>
  </Center>
   

  
  );
};

export default ReduxTestScreen;


