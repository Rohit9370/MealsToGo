import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typograpy/typograpy";
import Favourite from "../favourite/favourite.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const Mapcardcomponent = ({ restaurant }) => {
  const Image = isAndroid ? CompactImage : CompactWebview;
  const imageUrl = restaurant.photos[0]

  return (
    <Item>
      <Favourite restaurant={restaurant} />
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 120, height: 100, borderRadius: 10 }}
        />
      )}
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
