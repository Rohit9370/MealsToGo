import { FlatList, StatusBar, Touchable, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components";
import { MainConatiner } from "../../../components/utility/safe-area-context";
import { MD2Colors, ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/Restaurant.card";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurant/mocks/restaurant.context";
import Search from '../../restaurant/components/search'

const RestaurantScreen = ({navigation}) => {
 
  //constant Declare using Styled component

  const RestaurantCardList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;
  const LoadingContainer=styled.View`
  flex:1;
  justify-content:center;
  align-item:center
  `
 const Loader=styled(ActivityIndicator)`
   margin-left:-25px
 `
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  //return
  return (
    <MainConatiner>
     <Search />
      {isLoading ? (
        <LoadingContainer>
          <Loader animated={true} color={MD2Colors.blueA300} size={100}/>
        </LoadingContainer>
      ) : (
        <RestaurantCardList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
              onPress={()=>navigation.navigate('RestaurantDatailScreen'
               ,{restaurant:item}
              )
            }
              >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
              </TouchableOpacity>
            );
          }}
          key={(item) => item.name}
        />
      )}
    </MainConatiner>
  );
};

export default RestaurantScreen;
