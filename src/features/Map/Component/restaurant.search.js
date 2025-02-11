import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import React,{useState,useContext} from "react";
import { LocationContext } from "../../../services/restaurant/location/location.context";



const SearchBarContiner = styled.View`
`;

//here we want to implement the search functionality
const Search = () => {
    const {isLoading,error,location,keyword,search}=useContext(LocationContext);
    const[searchKeyWord,setKeyword]=useState(keyword);
  return (
    <SearchBarContiner>
    <Searchbar
      value={searchKeyWord}
      elevation={5}
      style={{ borderRadius: 0, 
        marginHorizontal:10,
        position:"absolute",
        top:40,
        zIndex:999,
      }}
      placeholder="Search the country"
      onSubmitEditing={()=>
       search(searchKeyWord)
      }
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

