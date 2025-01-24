import React from "react";
import RestaurentScreen from "./src/features/restaurant/screens/restaurant.screen";
import { View } from "react-native";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from 'styled-components'
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <RestaurentScreen />
      </ThemeProvider>
    </View>
  );
}
