import React from "react";
import {Box,HStack,Text} from "native-base"


const HomeHeader = () => {
    return(
        <SafeAreaView>
        <Box style={styles.headerStyle}>
          <Text style={styles.textStyle}>
            FUCKING TITLE
          </Text>
        </Box>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: "#F8F8F8",
      justifyContent: "center",
      alignItems: "center",
      height: 60,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 2,
    }
  });
export default HomeHeader;