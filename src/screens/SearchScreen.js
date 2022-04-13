import React from "react";
import { Box,HStack,Text,VStack,ScrollView,Center,Image,Button} from "native-base";

import { SafeAreaView } from "react-native-safe-area-context";
import SearchSection from "../components/SearchSection";

const SearchScreen = ({ navigation }) => {
  return (
    // <SafeAreaView >    
      <SearchSection />
    // </SafeAreaView>
  );
};

export default SearchScreen;


