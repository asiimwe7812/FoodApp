import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function ButtomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 20,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}
const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5 name={props.icon} size={20} />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
