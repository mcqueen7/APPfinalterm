import React from 'react';
import { Box, Pressable, Actionsheet, useDisclose,Text, HStack } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Pressable
        onPress={onOpen}
        position="absolute" left={"50%"} right={"50%"} bottom={"5%"} ml={-25}
        width={50} height={50} borderRadius={300}
        bg="#3B5998" shadow={2} justifyContent="center" alignItems="center" zIndex={99} 
      >
        <Box>
          <MaterialCommunityIcons name="plus" color="white" size={35} />
        </Box>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header><Text fontSize={20}>新增貼文</Text></Actionsheet.Header>
          <Actionsheet.Item justifyContent="center"><HStack alignItems={"center"}><MaterialCommunityIcons name="file-outline" color="black" size={20} /><Text fontSize={16} ml={3}>開啟新檔</Text></HStack></Actionsheet.Item>
          <Actionsheet.Item justifyContent="center"><HStack alignItems={"center"}><MaterialCommunityIcons name="content-save" color="black" size={20} /><Text fontSize={16} ml={3}>另存新檔</Text></HStack></Actionsheet.Item>
          <Actionsheet.Item justifyContent="center"><HStack alignItems={"center"}><MaterialCommunityIcons name="pencil-outline" color="black" size={20} /><Text fontSize={16} ml={3}>草稿編輯</Text></HStack></Actionsheet.Item>
          <Actionsheet.Item justifyContent="center"><HStack alignItems={"center"}><MaterialCommunityIcons name="delete" color="black" size={20} /><Text fontSize={16} ml={3}>刪除貼文</Text></HStack></Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer safeAreaBottom={true}>
          <Actionsheet.Item justifyContent="center" onPress={onClose}>取消</Actionsheet.Item>
        </Actionsheet.Footer>          
      </Actionsheet>
    </>
  );
}
