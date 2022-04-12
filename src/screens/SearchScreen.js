import React from "react";
import { Box,HStack,Text,VStack,ScrollView,Center,Image,Button} from "native-base";
import SearchList from "../components/SearchList";
import GuessList from "../components/GuessList";
import popData1 from "../json/search_section.json";
import popData2 from "../json/aspiration_fill.json";
import popData3 from "../json/vocational_school.json";
import guessData from "../json/guess.json";
import SearchBar from "../components/SearchBar";
import SerachSection  from "../components/SearchSection";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchSection from "../components/SearchSection";

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
    <SearchSection />
    </SafeAreaView>
  );
};

export default SearchScreen;


