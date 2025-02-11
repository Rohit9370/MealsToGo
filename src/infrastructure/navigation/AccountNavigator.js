import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../components/account/screen/account.screen";
import AccountRagister from "../../components/account/screen/account.ragister";
import AccountLogin from "../../components/account/screen/account.login";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="LoginScreen" component={AccountLogin} />
      <Stack.Screen name="RagisterScreen" component={AccountRagister} />
    </Stack.Navigator>
  );
};
