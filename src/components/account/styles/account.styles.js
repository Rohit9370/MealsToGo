import { ImageBackground,View } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Button,TextInput } from 'react-native-paper'
import {colors} from '../../../infrastructure/theme/colors'
import { Text } from '../../typograpy/typograpy'
export const Background =styled.ImageBackground.attrs({
  source:require('../../../../assets/home_bg.jpg')
})`
 flex:1px;
 justifyContent:center;
 alignItems:center;
 `
export const AccountCard=styled.View`
position:absolute;
height:100%;
width:100%;
background-color:rgba(255,255,255,0.3);
`
export const AccountCardContainer=styled.View`
background-color:rgba(255,255,255,0.9);
padding:${(props)=>props.theme.space[4]};
margin-top:${(props)=>props.theme.space[0]};
`
export const LoginButton=styled(Button).attrs({
 Color:colors.brand.primary,
 mode:'contained',
 icon:'lock-open-outline'
})`
 padding:${(props)=>props.theme.space[2]};
margin-top:${(props)=>props.theme.space[2]};
`
export const RagisterButton=styled(Button).attrs({
  Color:colors.brand.primary,
  mode:'contained',
  icon:'email'
 })`
 padding:${(props)=>props.theme.space[2]};
margin-top:${(props)=>props.theme.space[2]};
 `
 export const BackButton=styled(Button).attrs({
  Color:colors.brand.primary,
  mode:'contained',

 })`
 padding:${(props)=>props.theme.space[2]};
margin-top:${(props)=>props.theme.space[2]};
 `
export const AuthInput = styled(TextInput)`
  height: 30px;
  width: 230px;
  margin-top: ${(props) => props.theme.space[2]};
`;

export const ErrorContainer = styled.View`
  max-width: 25-0px;
  align-item:center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  align-self: center;
`
export const Title=styled(Text)`
font-size:30px;

`
export const AnimationWrapper=styled.View`
position:absolute;
width:100%;
height:100%;
opacity:0.8;
`