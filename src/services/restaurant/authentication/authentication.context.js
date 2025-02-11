import { loginRequest,RagisterRequest } from "./authentication.services"
import React,{createContext,useState} from "react"
import { OnSignOut } from "./authentication.services";

export const AuthenticationContext=createContext();

export const AuthenticationContextProvider=({children})=>
{
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [user,setUser]=useState(null);
    const [isloading,setIsloading]=useState(false);
    const [error,setError]=useState(null);
      
    const onLogin=(email,password)=>
    {
        setIsloading(true);
        loginRequest(email,password).then((u)=>
        {
            setUser(u);
             setIsloading(false);
             setIsAuthenticated(true);
            
       }).catch((e)=>{
            setIsloading(false);
            setError(e);
        
        })
    }
      
 const onRagister=(email,password,repeatedPassword)=>
 {
    if(password !== repeatedPassword )
    {
     return setError("Password don't Match ");
    
    }
    setIsloading(true);
    RagisterRequest(email,password).then((u)=>
    {
        setUser(u);
        setIsloading(false);
        setIsAuthenticated(true);
        
   }).catch((e)=>{
        setIsloading(false);
        setError(e);
    
    })

 }
 const onSignOut=()=>
 {
    setUser(null);
    setIsloading(false);
    OnSignOut;  
    setIsAuthenticated(false);

 }

 return (
     <AuthenticationContext.Provider value={{
        user,
        isloading,
        error,
        onLogin,
        isAuthenticated,
        onRagister,
        onSignOut
     }} >
        {children}
     </AuthenticationContext.Provider>
 );
}