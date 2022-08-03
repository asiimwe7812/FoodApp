import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
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

// Creating Dispatch for feching restaurant info from store created by redux 🚆

export default function MenuItem({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingBottom: 500,
      }}
    >
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.MenuItemStyles}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "gray", borderRadius: 5 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
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
const FoodImage = ({ marginLeft, ...props }) => {
  return (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 150,
          height: 100,
          borderRadius: 8,
          marginLeft: marginLeft,
        }}
      />
    </View>
  );
};
