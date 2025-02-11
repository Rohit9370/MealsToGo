import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurant/screens/restaurant.screen";
import RestaurantDetailScreen from "../../features/restaurant/screens/restaurant.datail.screen";

const Stack = createStackNavigator();

const RestaurantAppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantAppNavigation;