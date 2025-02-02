import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import React,{useState,useContext} from "react";
import { LocationContext } from "../../../services/restaurant/location/location.context";

const SearchBarContiner = styled.View`
padding: 10px;
`;

//here we want to implement the search functionality
const Search = () => {
    const {isLoading,error,location,keyword,search}=useContext(LocationContext);
    const[searchKeyWord,setKeyword]=useState(keyword)
  return (
    <SearchBarContiner>
    <Searchbar
      elevation={5}
      style={{ borderRadius: 0 }}
      placeholder="Search the country"
      onSubmitEditing={()=>
       search(searchKeyWord)
      }
      value={searchKeyWord}
      onChangeText={(text)=>
      {
        setKeyword(text);
      }
      }
    />
  </SearchBarContiner>
  )
}

export default Search;

