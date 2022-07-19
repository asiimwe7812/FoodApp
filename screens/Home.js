import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View style={{ backgroundColor: "#eee", flex: 1, paddingTop: 30 }}>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </View>
  );
};

export default Home;
