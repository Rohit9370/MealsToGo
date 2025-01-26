import { useState, createContext, useEffect } from "react";
import { restaurantRequest, transfromresult } from "./restaurant.services";

export const RestaurantContext = createContext();

export const RestaurantcontextProvider = ({ children }) => {
  // State to store data
  const [isLoading, setLoading] = useState(false);
  const [restaurants, setRestaurant] = useState([]);
  const [error, setError] = useState(null);

  const RestaurantRetrival = () => {
    setLoading(true); // Set loading before the request
     setTimeout(()=>
    {
      restaurantRequest()
      .then(transfromresult)
      .then((results) => { 
        setLoading(false);
        setRestaurant(results);
        // Stop loading after the data is fetched
      })
      .catch((err) => { 
        setLoading(false); 
        setError(err);
     // Stop loading if an error occurs
      });
    },2000)
  };

  useEffect(()=>{RestaurantRetrival()},[])
 
  return (

    <RestaurantContext.Provider value={{ restaurants, error, isLoading }}>
      {children}
    </RestaurantContext.Provider>
  );
};
