import { RestaurantInfoCard } from "../components/Restaurant.card";
import React, { useContext } from "react";
import { FavouriteContext } from "../../../services/restaurant/favourite/favourite";
import { Text } from "react-native-paper";
import { MainConatiner } from "../../../components/utility/safe-area-context";
import { Spacer } from "../../../components/spacer/spacer.component";
const FavouriteScreen = () => {
  const { favourites } = useContext(FavouriteContext);

  return favourites.length !== 0 ? (
    favourites.map((restaurantX,i) => (
        <Spacer key ={restaurantX.name} size="large">
      <RestaurantInfoCard  restaurant={restaurantX} />
     </Spacer>

    ))
  ) : (
    <MainConatiner>
      <Text>Sorry, no favourites found.</Text>
    </MainConatiner>
  );
};

export default FavouriteScreen;