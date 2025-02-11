import { MainConatiner } from "../../../components/utility/safe-area-context";
import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/restaurant/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typograpy/typograpy";

const ListItem = styled(List.Item)`
  padding: 16px;
`;
const AvatarContainer = styled.View`
  alignSelf:center;
`;
const AvatarIcon =styled(Avatar.Icon)`
    backgroundColor:#f4024f;

`
const Setting = ({ route, navigation }) => {
  const { onSignOut, user } = useContext(AuthenticationContext);

  return (
    <MainConatiner>
      <AvatarContainer>
        <AvatarIcon icon="human" color="white" size={120} />
        <Spacer size='large'>
        <Text variant="label">{user.user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <ListItem
        title="Favourites"
        description="view Your Favourites"
        onPress={() => {
          navigation.navigate("Favourites");
        }}
        left={(props) => <List.Icon {...props} icon="heart" color="black" />}
      />
      <List.Section>
        <ListItem
          title="log-out"
          onPress={() => {
            onSignOut();
          }}
          left={(props) => <List.Icon {...props} icon="logout" color="black" />}
        />
      </List.Section>
    </MainConatiner>
  );
};

export default Setting;
