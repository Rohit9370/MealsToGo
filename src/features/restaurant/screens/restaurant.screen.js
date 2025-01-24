import {StatusBar} from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import {RestaurantInfoCard} from '../components/Restaurant.card'




const RestaurantScreen = () => {
//constant Declare using Styled component
const MainConatiner= styled.View`
flex:1;
paddingTop:${StatusBar.currentHeight}px;
background-color:#f0f0f0;
`
const SearchBarContiner=styled.View`
padding:10px;
`
const List=styled.View`
flex:1;
padding:16px;
`



//return
  return (
    <MainConatiner>
        <SearchBarContiner>
        <Searchbar elevation={5} style={{borderRadius:0}}
        placeholder='search'/>
        </SearchBarContiner>
        <List>
            <RestaurantInfoCard />
        </List>
    </MainConatiner>
  )

}

export default RestaurantScreen