import { ActivityIndicator, MD2Colors } from "react-native-paper";
import React from "react";
import {
  AccountCard,
  Title,
  AccountCardContainer,
  AnimationWrapper,
  Background,
  LoginButton,
  RagisterButton,
} from "../styles/account.styles";
import LottieView from "lottie-react-native";
const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <AccountCard />
      <AnimationWrapper>
        <LottieView
          style={{
            width: "100%",
            height: "50%",
          }}
          source={require("../../../../assets/watermelon.json")}
          key="animation"
          animation="cover"
          loop
          autoPlay
        />
      </AnimationWrapper>
      <Title>Meal To Go</Title>
      <AccountCardContainer>
        <LoginButton onPress={() => navigation.navigate("LoginScreen")}>
          Login
        </LoginButton>
        <RagisterButton onPress={() => navigation.navigate("RagisterScreen")}>
          Sign-up
        </RagisterButton>
      </AccountCardContainer>
    </Background>
  );
};

export default AccountScreen;
