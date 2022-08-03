import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/About";
import MenuItem from "../components/MenuItem";
import ViewCart from "../components/ViewCart";
const foods = [
  {
    title: "Chicken KFC",
    description: "Chicken Tonight",
    price: "$18.50",
    image:
      "https://assets.newatlas.com/dims4/default/7c0af90/2147483647/strip/true/crop/1372x915+0+0/resize/1372x915!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fb8%2F01%2F42fb621748ceb2a3c56f158d373f%2Fbucket-tenders-laying.jpeg",
  },
  {
    title: "Luwombo",
    description: "Local foods",
    price: "$28.30",
    image: "https://i.ytimg.com/vi/-2kdqAm8M4A/sddefault.jpg",
  },
  {
    title: "Fish",
    description: "Fried Fish",
    price: "$38.90",
    image:
      "https://lh3.googleusercontent.com/r9I0yd-TOwZ-SjB4Ea7_RFSvLFk-tugy-GVSICMvYacnwziRid99mmiqvan5kXQS2RMksjjkkTqEPCSM2p6I=w1280-h960-c-rj-v1-e365",
  },
  {
    title: "Pork fried Rice",
    description: "Yummy yummy",
    price: "$ 25.00",
    image:
      "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2020-12/pork-fried-rice-recipe.jpeg",
  },
  {
    title: " Jelov fried Rice",
    description: "Nigerian food",
    price: "$13.50",
    image: "https://allnigerianfoods.com/wp-content/uploads/jollof_rice.jpg",
  },
  {
    title: " Jelov fried Rice",
    description: "Nigerian food",
    price: "$15.30",
    image: "https://allnigerianfoods.com/wp-content/uploads/jollof_rice.jpg",
  },
];

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
