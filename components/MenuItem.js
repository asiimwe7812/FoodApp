import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements/dist/divider/Divider";
const styles = StyleSheet.create({
  MenuItemStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  TitleStyle: {
    fontWeight: "600",
    fontSize: 20,
  },
});
const foods = [
  {
    title: "Chicken KFC",
    description: "Chicken Tonight",
    price: "Shs 18000",
    image:
      "https://assets.newatlas.com/dims4/default/7c0af90/2147483647/strip/true/crop/1372x915+0+0/resize/1372x915!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fb8%2F01%2F42fb621748ceb2a3c56f158d373f%2Fbucket-tenders-laying.jpeg",
  },
  {
    title: "Luwombo",
    description: "Local foods",
    price: "Shs 28000",
    image: "https://i.ytimg.com/vi/-2kdqAm8M4A/sddefault.jpg",
  },
  {
    title: "Fish",
    description: "Fried Fish",
    price: "Shs 38000",
    image:
      "https://lh3.googleusercontent.com/r9I0yd-TOwZ-SjB4Ea7_RFSvLFk-tugy-GVSICMvYacnwziRid99mmiqvan5kXQS2RMksjjkkTqEPCSM2p6I=w1280-h960-c-rj-v1-e365",
  },
  {
    title: "Pork fried Rice",
    description: "Yummy yummy",
    price: "Shs 25000",
    image:
      "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2020-12/pork-fried-rice-recipe.jpeg",
  },
  {
    title: " Jelov fried Rice",
    description: "Nigerian food",
    price: "Shs 13000",
    image: "https://allnigerianfoods.com/wp-content/uploads/jollof_rice.jpg",
  },
  {
    title: " Jelov fried Rice",
    description: "Nigerian food",
    price: "Shs 13000",
    image: "https://allnigerianfoods.com/wp-content/uploads/jollof_rice.jpg",
  },
];

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.MenuItemStyles}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderColor: 0 }}
              fillColor="yellow"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = (props) => {
  return (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <Text style={styles.TitleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};
const FoodImage = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{ width: 150, height: 100, borderRadius: 8 }}
      />
    </View>
  );
};
