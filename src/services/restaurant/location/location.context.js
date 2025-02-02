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
        console.log(searchKeyWord)
        if(!searchKeyWord.trim().length)
        {
            //don't do anything
            return;
        }
   
        LocationRequest(searchKeyWord.toLowerCase())
            .then(LocationTransform)
            .then((result) => {
                setLoading(false);
                setLocation(result);
                console.log(result)
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    };

    useEffect(() => {
        onSearch('');  // perform search on mount or when `keyword` changes
    }, []); // re-run when `keyword` changes

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                keyword, // expose the setKeyword function to allow updates from child components
                search:onSearch,
                 
                   // expose the search function
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
