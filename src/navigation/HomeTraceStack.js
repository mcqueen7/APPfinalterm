import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Box,Center,FormControl,HStack,VStack,Input,Text,Button, useColorMode, FlatList} from "native-base"
import { addmsg, readMsgs ,updateMsgNum} from "../api/firebase";
import { addMsgsAsync,readMsgsAsync,selectmsgs} from "../redux/msgsSlice"
import { addMsgNum, selectGeneral, updateUserAsync} from "../redux/accountSlice";
import sections from '../json/personal_section.json';
import MsgBox from "../components/MsgBox";
const HomeTraceStack = () => {
  const general = useSelector(selectGeneral);
  const messeges=useSelector(selectmsgs);
  console.log("AAAAAAAA:"+messeges);
  //console.log("BBBBBBBB"+sections[1].data);
  const msgs=readMsgs();
  console.log("msg msgm msg ："+msg);
  const username=general.name?general.name:"訪客";
  const userphoto=general.adrs;
  const msgNum=general.msgNum;
  const { colorMode } = useColorMode();
  const [msg, setMsg] = useState();
//   const formLabelStyle = {
//     color: colorMode == "light" ? "muted.700" : "white",
//     fontSize: "18",
//     fontWeight: "bold",
//  };

useEffect(() => {
  dispatch(readMsgsAsync());
}, [general])
const dispatch = useDispatch();
 const focusInputStyle = {
    borderColor: colorMode == "light" ? "muted.700" : "white",
 }
 const onAddMsg=()=>{
  dispatch(addMsgsAsync({msg,username,userphoto}));//username+userphoto
 }
 const onUpdate = () => {
  dispatch(addMsgNum());
   updateMsgNum(general.msgNum);
}

  //const text="幹";
  return (
    <Center h="100%" bgColor={"blue.100"} padding="3%">
      <VStack w="100%" >
        <Box paddingTop={"2%"} h="90%" bgColor={"white"} borderTopRadius="30"> 
        {/* <Text>{msg}</Text> */}
          <FlatList
            paddingX={"5%"}
            paddingBottom={"0%"}
            data={messeges}
            renderItem={({ item }) => <MsgBox data={item} />}
            showsHorizontalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            keyExtractor={ (item,index) => item+index }
          />
        </Box>
        <Box h="10%" bgColor={"blue.300"} borderBottomRadius="10"> 
          <HStack  alignSelf="center"alignContent="center" alignItems="center" justifyContent="center">
            <FormControl w="70%">
               <Input
                  variant="underlined" _focus={focusInputStyle}
                  value={msg}  onChangeText={text => setMsg(text)}
               />
            </FormControl>
            {/* <Button  onPress={()=>{ console.log("ASJDIAJSDI："+msgs+username+userphoto);onAddMsg();readMsgsAsync();setMsg("")}}>留言</Button> */}
            <Button  onPress={()=>{ console.log("GGGGGGGGGGG："+JSON.stringify(messeges)+"MSG MSG MSG"+msgs);onAddMsg();onUpdate();dispatch(readMsgsAsync());setMsg("")}}>留言</Button>
          </HStack>
        </Box>

      </VStack>
    </Center>
  );
}


export default HomeTraceStack;