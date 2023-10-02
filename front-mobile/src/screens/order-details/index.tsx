import React from "react";
import { Alert, Linking, StyleSheet, View } from "react-native";
import { confirmDelivery } from "../../api";
import { useNavigation } from "@react-navigation/native";
import { Order } from "../../types";

//components
import Button from "../../components/button";
import Header from "../../components/header";
import OrderCard from "../../components/order-card";

type Props = {
  route: {
    params: {
      order: Order;
    };
  };
};

export default function OrderDetails({ route }: Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleCancel = () => navigation.navigate("Orders");

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
        navigation.navigate("Orders");
      })
      .catch(() => Alert.alert("Houve um erro ao confirmar o pedido"));
  };

  const handleStartNavigation = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`
    );
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <Button text="INICIAR NAVEGAÇÃO" onPress={handleStartNavigation} />
        <Button text="CONFIRMAR ENTREGA" onPress={handleConfirmDelivery} />
        <Button text="CANCELAR" onPress={handleCancel} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  button: {
    backgroundColor: "#DA5C5C",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFF",
    letterSpacing: -0.24,
    fontFamily: "OpenSans_700Bold",
  },
});
