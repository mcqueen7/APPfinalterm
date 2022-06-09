import React from 'react';
import { Box, Pressable, Actionsheet, useDisclose,Text, HStack, useColorModeValue } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import {selectArticleNum, setArticleNum} from "../redux/articleNumSlice"
import { addMsgNum } from '../redux/accountSlice';

export default () => {
  const artcount=useSelector(selectArticleNum);
  const dispatch=useDispatch();
  //
  
  const { isOpen, onOpen, onClose } = useDisclose();
  const BGcolor=useColorModeValue("#477CEA","#FFF1CD");
  const plusColor=useColorModeValue("#FFFFFF","#000000");
  const iconColor=useColorModeValue("#000000","#ffffff");
  return (
    <>
      <Pressable
        onPress={onOpen}
        position="absolute" left={"50%"} right={"50%"} bottom={"5%"} ml={-25}
        width={50} height={50} borderRadius={300}
        bg={BGcolor} shadow={2} justifyContent="center" alignItems="center" zIndex={99} 
      >
        <Box>
          <MaterialCommunityIcons name="plus" color={plusColor} size={35} />
        </Box>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item alignItems={"center"}><Text fontSize={20} >新增貼文</Text></Actionsheet.Item>
          <Actionsheet.Item onPress={()=>{dispatch(setArticleNum(artcount + 1));dispatch(addMsgNum()) }}><HStack alignItems={"center"} ><MaterialCommunityIcons name="file-outline" color={iconColor} size={20} /><Text fontSize={16} ml={3}>開啟新檔</Text></HStack></Actionsheet.Item>
          <Actionsheet.Item ><HStack alignItems={"center"}><MaterialCommunityIcons name="content-save" color={iconColor} size={20} /><Text fontSize={16} ml={3}>另存新檔</Text></HStack></Actionsheet.Item>
          <Actionsheet.Item ><HStack alignItems={"center"}><MaterialCommunityIcons name="pencil-outline" color={iconColor} size={20} /><Text fontSize={16} ml={3}>草稿編輯</Text></HStack></Actionsheet.Item>
          <Actionsheet.Item onPress={()=>{dispatch(setArticleNum(artcount - 1)) }}><HStack alignItems={"center"}><MaterialCommunityIcons name="delete" color={iconColor} size={20} /><Text fontSize={16} ml={3}>刪除貼文</Text></HStack></Actionsheet.Item>
          <Actionsheet.Item onPress={onClose}>取消</Actionsheet.Item>
        </Actionsheet.Content>        
      </Actionsheet>
    </>
  );
}

// onPress={()=>alert("ASS")}
