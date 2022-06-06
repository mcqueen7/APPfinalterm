import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, FormControl, useColorMode, VStack, Text, Input, Button, useColorModeValue } from 'native-base'

import { selectGeneral, readUserAsync, updateUserAsync } from "../redux/accountSlice";

const PersonalDataScreen = () => {
   const general = useSelector(selectGeneral);
   const [name, setName] = useState();
   const [schoolname, setschoolName] = useState();
   const [email, setEmail] = useState();
   const [adrs, setAdrs] = useState();
   const [tel, setTel] = useState();

   const dispatch = useDispatch();

   const { colorMode } = useColorMode();
   const formLabelStyle = {
      color: colorMode == "light" ? "muted.700" : "white",
      fontSize: "18",
      fontWeight: "bold",
   
   };
   const focusInputStyle = {
      borderColor: colorMode == "light" ? "muted.700" : "white",
   }

   const onUpdate = () => {
      dispatch(updateUserAsync({ name, schoolname, email, adrs, tel }));
   }

   useEffect(() => {
      dispatch(readUserAsync());
   }, [])

   useEffect(() => {
      setName(general.name)
      setschoolName(general.schoolname)
      setEmail(general.email)
      setAdrs(general.adrs)
      setTel(general.tel)
   }, [general]);
   const topBoxBGColor=useColorModeValue("#FFF5DB","#36322F");
   return (
      <ScrollView bgColor={topBoxBGColor}>
         <VStack space={2} mt={5} width="70%" alignSelf="center" >
            {/* <Text textAlign="center" fontSize="2xl" pb="4">
               個人資料設定
            </Text> */}
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  名稱
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle} value={name}
                  onChangeText={text => setName(text)}
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  學校
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle} value={schoolname}
                  onChangeText={text => setschoolName(text)}
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  電子信箱
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle} value={email}
                  onChangeText={text => setEmail(text)}
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  頭像URL
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle}
                  value={adrs} onChangeText={text => setAdrs(text)}
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  電話
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle}
                  value={tel} onChangeText={text => setTel(text)}
               />
            </FormControl>
            <Button mt="6" mb="12" h="10" w="70%" mx="auto" bgColor="#477CEA"
               borderRadius={20}
               onPress={onUpdate}
            >
               修改資料
            </Button>
         </VStack>
      </ScrollView>

   );
}

export default PersonalDataScreen;