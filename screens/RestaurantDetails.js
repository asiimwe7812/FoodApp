import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/About";
import MenuItem from "../components/MenuItem";

export default function RestaurantDetails() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />

      <MenuItem />
    </View>
  );
}
