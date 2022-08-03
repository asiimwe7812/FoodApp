import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import OrderItem from "./OrderItem";
import firebase from "../firebase";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
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

  const addOrderTofirebase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate("OrderCompleted");
  };
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgb(0,0,0,0.7)",
    },
    modalCheckoutConatainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    modalCheckoutButton: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
    subTotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subTotaltext: {
      textAlign: "left",
      fontSize: 15,
      fontWeight: "600",
    },
  });

  const checkOutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutConatainer}>
            <Text style={styles.modalCheckoutButton}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotaltext}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "black",
                  marginTop: 20,
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                  alignItems: "center",
                }}
                onPress={() => {
                  addOrderTofirebase();
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>CheckOut</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkOutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            buttom: 120,
            zIndex: 900,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: 30,
                  alignItems: "center",
                }}
              >
                ViewCart
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: 20,
                  alignItems: "center",
                }}
              >
                {totalUSD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
