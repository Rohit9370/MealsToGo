import { View, Text } from "react-native";
import React, { useState } from "react";
import { RestaurantInfoCard } from "../components/Restaurant.card";
import { MainConatiner } from "../../../components/utility/safe-area-context";
import {List} from  'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
import {Ionicons, MaterialIcons} from "@expo/vector-icons"


const RestaurantDatailScreen = ({ route }) => {
    const { restaurant } = route.params;
    const [BreakfastExpanded, setBreakfastExpanded] = useState(false);
    const [LunchExpanded, setLunchExpanded] = useState(false);
    const [DinnerExpanded, setDinnerExpanded] = useState(false);
    const [DrinksExpanded, setDrinksExpanded] = useState(false);
  
    // Array of meal items
    const breakfastItems = ['Eggs', 'Pancakes', 'Bacon', 'Toast'];
    const lunchItems = ['Burger', 'Fries', 'Salad', 'Chicken Sandwich'];
    const dinnerItems = ['Steak', 'Pasta', 'Fish', 'Vegetarian Stir-fry'];
    const drinksItems = ['Water', 'Coke', 'Lemonade', 'Beer'];
  
    return (
      <MainConatiner>
        <RestaurantInfoCard restaurant={restaurant} />
        <ScrollView style={{marginTop:12}}>
          {/* Breakfast Accordion */}
          <List.Accordion
            left={(props) => (
              <List.Icon {...props} icon={() => <Ionicons name="fast-food" size={24} color="purple" />} />
            )}
            title="Breakfast Options"
            expanded={BreakfastExpanded}
            onPress={() => setBreakfastExpanded(!BreakfastExpanded)}
          >
            {breakfastItems.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Accordion>
  
          {/* Repeat for Lunch, Dinner, Drinks sections */}
          <List.Accordion
            left={(props) => (
              <List.Icon {...props} icon={() => <Ionicons name="restaurant" size={24} color="purple" />} />
            )}
            title="Lunch Options"
            expanded={LunchExpanded}
            onPress={() => setLunchExpanded(!LunchExpanded)}
          >
            {lunchItems.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Accordion>
  
          <List.Accordion
            left={(props) => (
              <List.Icon {...props} icon={() => <MaterialIcons name="dinner-dining" size={24} color="purple" />} />
            )}
            title="Dinner Options"
            expanded={DinnerExpanded}
            onPress={() => setDinnerExpanded(!DinnerExpanded)}
          >
            {dinnerItems.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Accordion>
  
          <List.Accordion
            left={(props) => (
              <List.Icon {...props} icon={() => <Ionicons name="beer" size={24} color="purple" />} />
            )}
            title="Drinks Options"
            expanded={DrinksExpanded}
            onPress={() => setDrinksExpanded(!DrinksExpanded)}
          >
            {drinksItems.map((item, index) => (
              <List.Item key={index} title={item} />
            ))}
          </List.Accordion>
        </ScrollView>
      </MainConatiner>
    );
  };
  

export default RestaurantDatailScreen;
