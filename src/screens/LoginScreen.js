import { useState, useEffect } from "react"
import {
   Box,
   Text,
   Heading,
   VStack,
   FormControl,
   Input,
   Button,
   HStack,
   Center,
   Pressable,
   useColorMode,
} from "native-base";
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withRepeat,
   withTiming,
   Easing,
} from 'react-native-reanimated'; 
import { StyleSheet } from "react-native";
import { useDispatch, useSelector} from "react-redux";
import { gotoRegister, loginAsync, selectErrorMsg, selectStatus } from "../redux/accountSlice" //Q


const AnimatedButton = Animated.createAnimatedComponent(Button);

const LoginScreen = () => {
   const dispatch = useDispatch();
   const errMsg = useSelector(selectErrorMsg);
   const loginStatus = useSelector(selectStatus);
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const { colorMode } = useColorMode();

   const rotation = useSharedValue(0);
   const btnWidth = useSharedValue("100%");
   const btnHeight = useSharedValue("15%");
   const animatedSpinnerStyles = useAnimatedStyle(() => {
      return {
         transform: [
            {
               rotateZ: `${rotation.value}deg`,
            },
         ],
      };
   }, [rotation.value]);

   const animatedButtonStyles = useAnimatedStyle(() => {
      return {
         width: btnWidth.value,
         height: btnHeight.value,
         // transform:[
            
         // ]
      };
   }, [btnWidth.value,btnHeight.value]);

   const onLogin = () => {
      dispatch(loginAsync({ email, password }))
   }

   const goToRegister = () => {
      dispatch(gotoRegister())
   }

   useEffect(() => {
      if(loginStatus == 'error') {
         rotation.value = withTiming(0, {
            duration: 1000,
            easing: Easing.linear,
         });
         btnWidth.value = withTiming('100%', {
            duration: 400,
            easing: Easing.linear,
         });
         btnHeight.value = withTiming('15%', {
            duration: 400,
            easing: Easing.linear,
         });
      } else if (loginStatus == 'loading') {
         rotation.value = withRepeat(
            withTiming(360, {
               duration: 500,
               easing: Easing.linear,
            }),
            -1
         );
         btnWidth.value = withTiming("30", {
            duration: 300,
            easing: Easing.linear,
         });
         btnHeight.value = withTiming("22", {
            duration: 300,
            easing: Easing.linear,
         });
         
      }
   }, [loginStatus])

   return (
      <Center w="100%" flex={1}
         _dark={{ bg: "blueGray.900" }}
         _light={{ bg: "white" }}
      >
         <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack alignItems={'center'} mb="4">
               <Heading size="2xl" fontWeight="700" color="coolGray.800" _dark={{
                  color: "warmGray.50"
               }}>
                  登入
               </Heading>             
            </VStack>


            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>信箱</FormControl.Label>
                  <Input value={email}
                     onChangeText={email => setEmail(email)} />
               </FormControl>
               <FormControl>
                  <FormControl.Label>密碼</FormControl.Label>
                  <Input type="password" value={password}
                     onChangeText={password => setPassword(password)} />
               </FormControl>
               <AnimatedButton mt="12"  w="100%" mx="auto" bgColor={"#477CEA"}
                  borderRadius={loginStatus == 'loading' ? 50 : 10}
                  //height="10"
                  style={animatedButtonStyles}
                  onPress={onLogin}
               >
                  {
                     loginStatus == 'loading'
                        ? <Animated.View style={[styles.spinner, animatedSpinnerStyles]} />
                        : '登入'
                  }
               </AnimatedButton>
               <Box h="30"></Box>
               <HStack mt="2" justifyContent="center" alignItems={"center"}>
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                     color: "warmGray.200"
                  }}>
                     沒有帳號?{"  "}
                  </Text>
                  <Pressable  onPress={goToRegister}>
                     <Text
                        color={colorMode == 'dark'? "indigo.300" : "indigo.500"}
                        fontWeight="medium"
                        fontSize="xs"
                        position="relative"
                        underline
                        bold
                     >註冊帳號</Text>
                  </Pressable>


               </HStack>
               <Text mt="1" color="red.500" ml="1" fontSize="xs">
                  {errMsg}
               </Text>
            </VStack>
         </Box>
      </Center>
   );
};

const styles = StyleSheet.create({
   spinner: {
      height: 20,
      width: 20,
      borderRadius: 25,
      borderWidth: 4,
      borderTopColor: '#f5f5f5',
      borderRightColor: '#f5f5f5',
      borderBottomColor: 'lightblue',
      borderLeftColor: 'lightblue',
   },
})

export default LoginScreen;
