import React, { useState, createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  // Function to save favourites to AsyncStorage
  const saveFavourites = async (favourites, uid) => {
    try {
      const jsonValue = JSON.stringify(favourites); // Convert array to JSON string
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue); // Save JSON string with key '@favourites'
    } catch (e) {
      console.error("Error saving favourites:", e);
    }
  };

  // Function to load favourites from AsyncStorage
  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`); // Retrieve JSON string with key '@favourites'
      return jsonValue != null ? JSON.parse(jsonValue) : []; // Convert JSON string back to array and return
    } catch (e) {
      console.error("Error loading favourites:", e);
      return [];
    }
  };

  // Function to add a restaurant to favourites
  const add = (restaurant) => {
    if (!user || !user.user.uid) {
      
      console.error("User is not authenticated");
      return;
    }
    const newFavourites = [...favourites, restaurant];
    setFavourites(newFavourites);
    saveFavourites(newFavourites, user.user.uid); // Save updated favourites to AsyncStorage
  };

  // Function to remove a restaurant from favourites
  const remove = (restaurant) => {
    if (!user || !user.user.uid) {
      console.error("User is not authenticated");
      return;
    }
    const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
    setFavourites(newFavourites);
    saveFavourites(newFavourites, user.user.uid); // Save updated favourites to AsyncStorage
  };

  // Load favourites from AsyncStorage when the component mounts
  useEffect(() => {
    const fetchFavourites = async () => {
      if (user.user.uid) {
        const favourites = await loadFavourites(user.user.uid);
        setFavourites(favourites);
      }
    };

    fetchFavourites();
  }, [user]);

  return (
    <FavouriteContext.Provider value={{ favourites, add, remove }}>
      {children}
    </FavouriteContext.Provider>
  );
};