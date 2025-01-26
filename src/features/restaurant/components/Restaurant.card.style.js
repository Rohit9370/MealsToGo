import { FlatList, StatusBar } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components";
import { MainContainer } from "../../../components/utility/safe-area-context";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/Restaurant.card";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurant/mocks/restaurant.context";

const SearchBarContainer = styled.View`
  padding: 10px;
`;

const RestaurantCardList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 14,
  },
})``;

const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext); 
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error loading restaurants!</Text>;
  }

  return (
    <MainContainer>
      <SearchBarContainer>
        <Searchbar elevation={5} style={{ borderRadius: 0 }} placeholder="Search" />
      </SearchBarContainer>

      <RestaurantCardList
        data={restaurants} // Use actual restaurant data here
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} /> {/* Pass restaurant item */}
          </Spacer>
        )}
        keyExtractor={(item) => item.placeId} // Use a unique key like placeId
      />
    </MainContainer>
  );
};

export default RestaurantScreen;
