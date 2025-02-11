import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/restaurant/authentication/authentication.context";
import {
  AccountCard,
  AccountCardContainer,
  Background,
  AuthInput,
  BackButton,
  Title,
  LoginButton,
  ErrorContainer,
} from "../styles/account.styles";
import { Text } from "../../typograpy/typograpy";
import { Spacer } from "../../spacer/spacer.component";
import { ActivityIndicator,MD2Colors } from "react-native-paper";


const AccountLogin = ({navigation}) => {
  const [email, setMail] = useState("");
  const [passowrd, setpass] = useState(null);
  const { isAuthenticated, error, onLogin,isloading } = useContext(AuthenticationContext);
  return (
    <Background>
      <AccountCard />
      <Title>Meal To Go</Title>
      <AccountCardContainer>
        <Spacer size="large">
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setMail(text)}
        />
        </Spacer>
        <Spacer>
        <AuthInput
          label="Password"
          secureTextEntry
          secure
          keyboardType="default"
          autoCapitalize="none"
          value={passowrd}
          onChangeText={(text) => setpass(text)}
        /></Spacer>
          <ErrorContainer>
        {error != null && (
            <Text variant={"error"}>{error.toString()}</Text>
        )}  
     </ErrorContainer>
 { isloading?<ActivityIndicator animating={true} color={MD2Colors.amber400}/>:<Spacer>
        <LoginButton
          onPress={() => {
            onLogin(email, passowrd);
          }}
        >
          Login
        </LoginButton>
        </Spacer>  }
      </AccountCardContainer>
      <BackButton
      onPress={()=>navigation.goBack()}>
        Back
      </BackButton>
    </Background>
  );
};

export default AccountLogin;
