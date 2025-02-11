import React, { useState, useContext, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { View } from "react-native";
import Search from "../Component/restaurant.search";
import { LocationContext } from "../../../services/restaurant/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/mocks/restaurant.context";
import { Mapcardcomponent } from "../../../components/CardInfoComponant/mapcardcomponent";

export default function MapScreen({ navigation }) {
  const { restaurants = [] } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const [latDelta, setDelta] = useState(0);

  useEffect(() => {
    if (viewport && viewport.southwest && viewport.northeast) {
      const southEast = viewport.southwest.lat;
      const northEast = viewport.northeast.lat;
      setDelta(northEast - southEast);
    }
  }, [viewport, location]);

  const Map = styled(MapView)`
    height: 100%;
    width: 100%;
  `;

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant,i) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <View>
            <Callout
              onPress={() => {
                navigation.navigate("RestaurantDetailScreen", { restaurant });
              }}
            >
             
                <Mapcardcomponent restaurant={restaurant} />
             
            </Callout>
             </View>
          </Marker>
        ))}
      </Map>
    </>
  );
}
