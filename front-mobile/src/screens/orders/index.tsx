import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { fetchOrders } from "../../api";
import { Order } from "../../types";

//components
import Header from "../../components/header";
import OrderCard from "../../components/order-card";

export default function Orders() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then((res) => setOrders(res.data))
      .catch(() => Alert.alert("Houve um erro ao buscar os pedidos"))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    return navigation.navigate("OrderDetails", { order });
  };

  const Loading = () => (
    <View style={styles.loading}>
      <ActivityIndicator color="#DA5C5C" size="large" />
      <Text style={styles.loadingText}>Atualizando Pedidos</Text>
    </View>
  );

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          orders.map((order) => (
            <TouchableOpacity
              key={order.id}
              onPress={() => handleOnPress(order)}
            >
              <OrderCard order={order} />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  loading: {
    alignItems: "center",
    marginTop: 50,
  },
  loadingText: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 15,
    marginTop: 10,
  },
});
