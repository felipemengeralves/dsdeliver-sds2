import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";

type Props = {
  text: string;
  onPress?: () => void;
};

export default function Button({ text, onPress }: Props) {
  return (
    <RectButton style={styles.button} onPress={onPress!}>
      <Text style={styles.buttonText}>{text}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
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
