import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import React,{useState,useContext} from "react";
import {LocationContext} from '../'


//here we want to implement the search functionality
const Search = () => {
    const {isLoading,error,location,keyword,search}=useContext(LocationContext);
    const[searchKeyWord,setKeyword]=useState(keyword)
  return (
    <Searchbar
      elevation={5}
      style={{ borderRadius: 0,
        zIndex:999,
        top:50,
        margin:10,
        position:'absolute'
    }}
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

  )
}

export default Search;

