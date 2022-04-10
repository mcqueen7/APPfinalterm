import React from "react";
import {Box,Button,HStack,Text, VStack} from "native-base"


const Home8Boxes = ({}) => {
    return( 
        <Box style={styles.headerStyle}>
          <HStack>
            <Text>操你媽</Text>
            <VStack>
              <Text>內文辣幹</Text>
              <Button>幹你娘按鈕</Button>
            </VStack>
          </HStack>
        </Box>
    );
}

export default Home8Boxes;