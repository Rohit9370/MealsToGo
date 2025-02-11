import { useState, createContext, useEffect } from 'react';
import { LocationRequest, LocationTransform } from './locationservice';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState([]);
    const [keyword, setKeyword] = useState('sanfrancisco');

    const onSearch = (searchKeyWord="") => {
        setLoading(true); 
        setKeyword(searchKeyWord);
    };
    useEffect(()=>
    {
        if(!keyword.trim().length)
            {
                //don't do anything
                return;
            }  
           
            LocationRequest(keyword.trim().toLowerCase())
                .then(LocationTransform)
                .then((result) => {
                    setLoading(false);
                    setLocation(result);
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error);
                });
    },[keyword])

    useEffect(() => {
        onSearch(keyword);  // perform search on mount or when `keyword` changes
    }, [keyword]); // re-run when `keyword` changes

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                keyword,
                search:onSearch,
                 
                   // expose the search function
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
