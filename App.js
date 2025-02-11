import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/restaurant/authentication/authentication.context";
import Navigation1 from "./src/infrastructure/navigation/index";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <ThemeProvider theme={theme}>
                <Navigation1 />
      </ThemeProvider>
    </AuthenticationContextProvider>
  );
}
