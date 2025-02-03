import React from "react";
import { RestaurantcontextProvider } from "./src/services/restaurant/mocks/restaurant.context";
import { LocationContextProvider} from "./src/services/restaurant/location/location.context.js";
import { ThemeProvider } from "styled-components";
import {theme} from './src/infrastructure/theme/index.js';
import Navigation1 from "./src/infrastructure/navigation/index.js";
import { GestureHandlerRefContext } from "@react-navigation/stack";

export default function App() { 

  return (

    <ThemeProvider theme={theme}> 
         <LocationContextProvider >
      <RestaurantcontextProvider>  

        <Navigation1/>

      </RestaurantcontextProvider>
      </LocationContextProvider>
    </ThemeProvider>
 
  );
}
