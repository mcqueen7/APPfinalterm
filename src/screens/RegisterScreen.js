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
   useColorMode,
   Pressable
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
import { gotoLogin, registerAsync, selectErrorMsg, selectStatus } from "../redux/accountSlice"

const AnimatedButton = Animated.createAnimatedComponent(Button);

const RegisterScreen = () => {
   const dispatch = useDispatch();
   const errMsg = useSelector(selectErrorMsg);
   const loginStatus = useSelector(selectStatus);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const adrs="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkamA8OGUcB1Lbo3S28cjZkaecyTFI6R6ww&usqp=CAU";
   const { colorMode } = useColorMode();
   const rotation = useSharedValue(0);
   const btnWidth = useSharedValue("100%");
   const btnHeight = useSharedValue("13%");
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
      };
   }, [btnWidth.value]);

   const onRegister = () => {
      dispatch(registerAsync({ name, email, password,adrs }))
   }


   const goToLogin = () => {
      dispatch(gotoLogin())
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
         btnHeight.value = withTiming('13%', {
            duration: 400,
            easing: Easing.linear,
         });
      } else if (loginStatus == 'loading') {
         rotation.value = withRepeat(
            withTiming(360, {
               duration: 1000,
               easing: Easing.linear,
            }),
            -1
         );
         btnWidth.value = withTiming("30", {
            duration: 300,
            easing: Easing.linear,
         });
         btnHeight.value = withTiming('18', {
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
               <Heading size="2xl" fontWeight="600" color="coolGray.800" _dark={{
                  color: "warmGray.50"
               }}>
                  註冊帳號
               </Heading>             
            </VStack>

            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>使用者名稱</FormControl.Label>
                  <Input value={name}
                     onChangeText={text => setName(text)} />
               </FormControl>
               <FormControl>
                  <FormControl.Label>信箱</FormControl.Label>
                  <Input value={email}
                     onChangeText={text => setEmail(text)} />
               </FormControl>
               <FormControl>
                  <FormControl.Label>密碼</FormControl.Label>
                  <Input type="password" value={password}
                     onChangeText={text => setPassword(text)} />
               </FormControl>
               <AnimatedButton mt="12" h="10" w="100%" mx="auto" bgColor={"#477CEA"}
                  borderRadius={loginStatus == 'loading' ? 50 : 10}
                  height="10"
                  style={animatedButtonStyles}
                  onPress={onRegister}
               >
                  {
                     loginStatus == 'loading'
                        ? <Animated.View style={[styles.spinner, animatedSpinnerStyles]} />
                        : '註冊'
                  }
               </AnimatedButton>
               <HStack mt="2" justifyContent="center" alignItems={"center"}>
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                     color: "warmGray.200"
                  }}>
                     已經有帳號了?{"  "}
                  </Text>
                  <Pressable onPress={goToLogin}>
                     <Text
                        color={colorMode == 'dark'? "indigo.300" : "indigo.500"}
                        fontWeight="medium"
                        fontSize="xs"
                        underline
                        bold
                     >立即登入</Text>
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
   buttonStyle: {
      color: "white",
      backgroundColor: 'black',
      textAlign: 'center',
      paddingVertical: 10,
      width: '100%',
      borderRadius: 200,
   },
   spinner: {
      height: 20,
      width: 20,
      borderRadius: 30,
      borderWidth: 4,
      borderTopColor: '#f5f5f5',
      borderRightColor: '#f5f5f5',
      borderBottomColor: 'lightblue',
      borderLeftColor: 'lightblue',
   },
})

export default RegisterScreen;
