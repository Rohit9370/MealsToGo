import React from "react";
import AppNavigation from "./AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/restaurant/authentication/authentication.context";
import { AccountNavigator } from "./AccountNavigator";

const Navigation1 = () => {
  const { isAuthenticated } = React.useContext(AuthenticationContext);

  return (

            <NavigationContainer>
              {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
            </NavigationContainer>
  );
};

export default Navigation1;
