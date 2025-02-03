import React from 'react'
import RestaurantScreen from '../../features/restaurant/screens/restaurant.screen'
import {createStackNavigator} from '@react-navigation/stack'
import { TransitionPresets } from '@react-navigation/stack'
import RestaurantDatailScreen from '../../features/restaurant/screens/restaurant.datail.screen'


const AppNavigator=createStackNavigator();
const RestaurantAppNavigation = () => {
  return (
     <AppNavigator.Navigator screenOptions={{headerShown:false,
        ...TransitionPresets.ModalSlideFromBottomIOS
     }}>
        <AppNavigator.Screen name="restaurant" component={RestaurantScreen}
        />
      <AppNavigator.Screen name="RestaurantDatailScreen" component={
        RestaurantDatailScreen
      }
        />
     </AppNavigator.Navigator>
   
  )
}

export default RestaurantAppNavigation