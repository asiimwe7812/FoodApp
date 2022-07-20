import React from "react";
import { Image, View, Text, ScrollView } from "react-native";
const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pickup ",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drink ",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery items ",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast foods ",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Fresh Deals",
  },

  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee ",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop starts here */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 30,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
        {/* loop ends here */}
      </ScrollView>
    </View>
  );
}
