import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FavouriteContext } from '../../services/restaurant/favourite/favourite';

const FavouriteTouch = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, add, remove } = useContext(FavouriteContext);
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteTouch
      onPress={() => {
        !isFavourite ? add(restaurant) : remove(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={23}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteTouch>
  );
};

export default Favourite;