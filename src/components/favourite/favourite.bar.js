import { ScrollView } from "react-native";
import React from "react";
import { Mapcardcomponent } from "../CardInfoComponant/mapcardcomponent";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import {Text} from '../typograpy/typograpy'

const Container = styled.View`
  padding: 10px;
`;
const Container1 = styled.TouchableOpacity`
  padding: 10px;
`;
const FavouriteBar = ({ Favourites, onNavigate }) => {
  if (Favourites.lenght===0) {
    return null;
  }
  return (
    <Container>
        <Spacer position="left" size="large">
            <Text varian="caption">Favourites</Text>
        </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Favourites.map((restaurant) => (
          <Container1
          key={restaurant.name}
            onPress={() => onNavigate("RestaurantDetailScreen", { restaurant })}
          >
            <Mapcardcomponent restaurant={restaurant} />
          </Container1>
        ))}
      </ScrollView>
    </Container>
  );
};

export default FavouriteBar;
