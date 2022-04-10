import React from "react";
import { StyleSheet,  View} from "react-native";
import {NativeBaseProvider,Box, Text,Heading,HStack,Pressable, Image} from "native-base";

var ad=[
  require('../images/computer_icon.png'),
  require('../images/computer_icon.png'),
  require('../images/computer_icon.png'),
  require('../images/computer_icon.png'),
  require('../images/computer_icon.png'),
  require('../images/computer_icon.png'),
];
var st=[
  require('../images/computer_icon.png'),
  require('../images/computer_icon.png'),
];
const HomeAllSchoolDetail =({ album, navigation}) => {
  //  let { album } = props;
  
   return (
      <Box bg="white">
           <Pressable
              onPress={() => {console.log(album);navigation.navigation.navigate('Detail',album)}}
            >
              <Text>ASSSSSSS</Text>
              <Box>
                <Box>
                 <Image
                  style={styles.imageStyle}
                  source={ad[album.image]}
                  alt="123"
                />   
              </Box>
              </Box>  
              <Box>
                {album.star!="null"? <HStack mt="16px">
                  <Image
                    source={st[album.star[0]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[1]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[2]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[3]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[4]]} alt="123"
                    mr="4px"
                  />
                  <Image
                    source={st[album.star[5]]} alt="123"
                    mr="4px"
                  />
                </HStack>:null}        
                <Heading style={styles.headerTitleStyle}>{album.title}</Heading>
                <Text style={styles.headerContentStyle} color="black:alpha.50" >{album.artist}</Text>
              </Box>    
            </Pressable> 
      </Box>
  )};

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 16,
    // fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 12,
    // fontWeight: '300',
    // color:"#000",
  },
  imageStyle: {
    height: 200,
    width: 140,
    marginRight:16,
  }
});

export default HomeAllSchoolDetail;
