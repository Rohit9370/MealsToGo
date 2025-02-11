import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import RestaurantAppNavigation from "./restaurant.navigation";
import MapScreen from "../../features/Map/Screen/Map.Screen";
import RestaurantDetailScreen from "../../features/restaurant/screens/restaurant.datail.screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SettingNavigation from "./Setting.navigation";
import { LocationContextProvider } from "../../services/restaurant/location/location.context";
import { RestaurantcontextProvider } from "../../services/restaurant/mocks/restaurant.context";
import { FavouriteContextProvider } from "../../services/restaurant/favourite/favourite";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TAB_ICON = {
  Home: "restaurant",
  Map: "map",
  Checkout: "cart",
  Setting: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.ternary,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const MapStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RestaurantDetailScreen"
      component={RestaurantDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FavouriteContextProvider>
        <RestaurantcontextProvider>
          <LocationContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen
                name="Home"
                component={RestaurantAppNavigation}
                options={{
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="Setting"
                component={SettingNavigation}
                options={{
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapStack}
                options={{
                  headerShown: false,
                }}
              />
            </Tab.Navigator>
          </LocationContextProvider>
        </RestaurantcontextProvider>
      </FavouriteContextProvider>
    </GestureHandlerRootView>
  );
};

export default AppNavigation;
