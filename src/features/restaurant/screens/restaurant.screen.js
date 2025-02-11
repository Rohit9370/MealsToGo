import { FlatList, StatusBar, Touchable, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MainConatiner } from "../../../components/utility/safe-area-context";
import { MD2Colors, ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/Restaurant.card";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurant/mocks/restaurant.context";
import Search from '../../restaurant/components/search'
import Favourite from "../../../components/favourite/favourite.component";
import FavouriteBar from "../../../components/favourite/favourite.bar";
import { FavouriteContext } from "../../../services/restaurant/favourite/favourite";
import FadeAnimation from "../../../components/animation/fade.animation";
const RestaurantScreen = ({navigation}) => {
   const [isToggled, setToggled] = useState(false)
  //constant Declare using Styled component
   const {Favourites}=useContext(FavouriteContext);
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
     <Search  
     isToggled={isToggled}
     onPressToggle={()=>setToggled(!isToggled)}  
     />
        {
        isToggled&&<FavouriteBar Favourites={Favourites}
        onNavigate={navigation.navigate}
        />
       }
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
              onPress={()=>navigation.navigate('RestaurantDetailScreen'
               ,{restaurant:item}
              )
            }
              >
              <Spacer position="bottom" size="large">
                <FadeAnimation>
                <RestaurantInfoCard restaurant={item} />
                </FadeAnimation>
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
