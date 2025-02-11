import { createStackNavigator,
    CardStyleInterpolators
 } from "@react-navigation/stack"
import Setting from "../../features/restaurant/screens/setting";
import FavouriteScreen from "../../features/restaurant/screens/Favourites.screen";
const Stack=createStackNavigator();

const SettingNavigation = () => {
  return (
    <Stack.Navigator
     screenOptions={{
        headerMode:"screen",
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
     }}
    >
        <Stack.Screen
        name="Settings"  component={Setting}
        />
    <Stack.Screen
        name="Favourites" component={FavouriteScreen}
        />

    </Stack.Navigator>
  )
}

export default SettingNavigation