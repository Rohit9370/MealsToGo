import { FlatList, StatusBar } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components";
import { MainConatiner } from "../../../components/utility/safe-area-context";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/Restaurant.card";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurant/mocks/restaurant.context";

const RestaurantScreen = () => {
  //constant Declare using Styled component

  const SearchBarContiner = styled.View`
    padding:10px;
  `;
  const RestaurantCardList = styled(FlatList).attrs({
    contentContainerStyle: {
     padding:16
    },
  })``
  const { restaurants, isLoading, error} = useContext(RestaurantContext);

  //return
  return (
    <MainConatiner>
      <SearchBarContiner>
        <Searchbar
          elevation={5}
          style={{ borderRadius: 0 }}
          placeholder="search"
        />
      </SearchBarContiner>   

 <RestaurantCardList
          data={restaurants}
          renderItem={({item})=> {
              return (<Spacer position="bottom" size="large">            
                    <RestaurantInfoCard restaurant={item}/>
                </Spacer>);
          }}
          key={(item)=>item.name}
        /> 
    </MainConatiner>
  );
};

export default RestaurantScreen;