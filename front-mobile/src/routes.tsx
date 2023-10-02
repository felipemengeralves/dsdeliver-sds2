import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//screens
import Home from "./screens/home";
import Orders from "./screens/orders";
import OrderDetails from "./screens/order-details";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
