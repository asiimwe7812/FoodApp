import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItem from "../components/MenuItem";
import { Divider } from "react-native-elements";

export default function OrderCompleted() {
  const [lastOrder, setlastOrder] = useState({
    items: [
      {
        title: "Chicken KFC",
        description: "Chicken Tonight",
        price: "$18.50",
        image:
          "https://assets.newatlas.com/dims4/default/7c0af90/2147483647/strip/true/crop//1372x915+0+0/resize/1372x915!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fb8%2F01%2F42fb621748ceb2a3c56f158d373f%2Fbucket-tenders-laying.jpeg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setlastOrder(doc.data());
        });
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 2, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          marginTop: 0.5,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 150, alignSelf: "center", marginBottom: 20 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          your order at {restaurantName} has been placed at {totalUSD}
        </Text>
        <Divider
          width={0.5}
          orientation="vertical"
          style={{ marginHorizontal: 20 }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
            loop={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
