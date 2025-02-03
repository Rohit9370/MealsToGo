import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MainConatiner } from "../../components/utility/safe-area-context";
import { colors } from "../theme/colors"
import RestaurantAppNavigation from "./restaurant.navigation";
import MapScreen from "../../features/Map/Screen/Map.Screen";


const Tab = createBottomTabNavigator();

const Setting = () => {
  return (
    <MainConatiner>
      <Text>Setting</Text>
    </MainConatiner>
  );
};




const TAB_ICON = {
  Home: "restaurant",
  Map: "map",
  Checkout: "cart",
  Setting: "settings",
};


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarActiveTintColor : colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.ternary,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen
        name="Home"
        component={RestaurantAppNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        options={{
          headerShown: false,
        }}
        component={Setting}
      />
      <Tab.Screen
        name="Map"
        options={{
          headerShown: false,
        }}
        component={MapScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation