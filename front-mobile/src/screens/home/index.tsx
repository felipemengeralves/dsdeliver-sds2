import React from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";

//components
import Header from "../../components/header";

export default function Home() {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("Orders");
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require("../../assets/deliveryman.png")} />
          <Text style={styles.title}>
            Acompanhe os pedidos e {"\n"} entregue no prazo
          </Text>
          <Text style={styles.subTitle}>
            Receba todos os pedidos do seu {"\n"} restaurante na palma da sua
            mão
          </Text>
        </View>
        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleOnPress}>
            <Text style={styles.buttonText}>VER PEDIDOS</Text>
          </RectButton>
        </View>
      </View>
    </>
  );
}
