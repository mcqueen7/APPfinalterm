import { Box, Center } from "native-base";
import { useEffect } from "react";
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withTiming,
   Easing,
} from 'react-native-reanimated';
import { useSelector } from "react-redux";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import { selectLogin } from "../redux/accountSlice";

const AnimatedBox = Animated.createAnimatedComponent(Box);

const AuthScreen = () => {
   const rotation = useSharedValue(0);
   const scaling = useSharedValue(1);
   const loginPosition = useSharedValue('0%');
   const registerPosition = useSharedValue('70%');
   const login = useSelector(selectLogin);

   const loginStyle = useAnimatedStyle(() => {
      return { 
         right: loginPosition.value,
         transform:[
            {
               rotateZ: `${rotation.value}deg`,
            },
            {
               scale: scaling.value,
            },
         ],
        
       }
   }, [loginPosition.value,rotation.value,scaling.value]);

   const registerStyle = useAnimatedStyle(() => {
      return { 
         left: registerPosition.value,
         transform:[
            {
               rotateZ: `${rotation.value}deg`,
            },
            {
               scale: 1-scaling.value,
            },
         ]
       }
   }, [registerPosition.value,rotation.value,scaling.value]);

   useEffect(() => {
      if (login.hasAccount) {
         rotation.value = withTiming(0, {
            duration: 700,
            easing: Easing.linear,
         });
         scaling.value = withTiming(1, {
            duration: 500,
            easing: Easing.linear,
         });
         loginPosition.value = withTiming("0%", {
            duration: 2000,
            easing: Easing.out(Easing.exp),
         });
         registerPosition.value = withTiming("70%", {
            duration: 1000,
            easing: Easing.out(Easing.exp),
         });
      } else {
         rotation.value = withTiming(360, {
            duration: 700,
            easing: Easing.linear,
         });
         scaling.value = withTiming(0, {
            duration: 500,
            easing: Easing.linear,
         });
         loginPosition.value = withTiming("70%", {
            duration: 1000,
            easing: Easing.out(Easing.exp),
         });
         registerPosition.value = withTiming("0%", {
            duration: 2000,
            easing: Easing.out(Easing.exp),
         });
      }
   }, [login])

   return (
      <Center flex={1}
         _dark={{ bg: "blueGray.900" }}
         _light={{ bg: "white" }}
      >
         <AnimatedBox
            w="100%" flex={1}
            position="absolute" style={loginStyle}
         >
            <LoginScreen /></AnimatedBox>
         <AnimatedBox
            w="100%" flex={1}
            position="absolute"
            style={registerStyle}
         >
            <RegisterScreen /></AnimatedBox>
      </Center>
   );
};

export default AuthScreen;
