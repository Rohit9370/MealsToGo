import React from "react";
import RestaurentScreen from "./src/features/restaurant/screens/restaurant.screen";
import { View, Text } from "react-native";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MainConatiner } from "./src/components/utility/safe-area-context";
import { colors } from "./src/infrastructure/theme/colors";
import { RestaurantcontextProvider } from "./src/services/restaurant/mocks/restaurant.context";





const Setting = () => {
  return (
    <MainConatiner>
      <Text>Setting</Text>
    </MainConatiner>
  );
};

const Map = () => {
  return (
    <MainConatiner>
      <Text>Map</Text>
    </MainConatiner>
  );
};

const Tab = createBottomTabNavigator();
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

export default function App() { 

  return (

    <ThemeProvider theme={theme}>
      <RestaurantcontextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
        >
          <Tab.Screen
            name="Home"
            component={RestaurentScreen}
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
            component={Map}
          />
        </Tab.Navigator>
      </NavigationContainer>
      </RestaurantcontextProvider>
    </ThemeProvider>
  );
}
