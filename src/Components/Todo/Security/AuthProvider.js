import { createContext, use, useContext, useState } from "react";

import { apiClient } from "../Api/ApiClient";
import { executeJwtAuthentication } from "../Api/AuthenticationServiceApi's";

const AuthContext= createContext();
export const useAuth= ()=>useContext(AuthContext);
export default function AuthProvider({children}){
    const[isAuthenticated, setAuthenticated] = useState(false);
    const[username, setUsername] = useState("");
    const[token, setBtoken] = useState("");
    
    // async function login(username,password){
    //     const btoken = "basic " +window.btoa(username + ":" + password);
    //     try{
    //         const response= await(executebasicauthentication(btoken));
    //         if(response.status === 200){
    //         setAuthenticated(true);
    //         setUsername(username);
    //         setBtoken(btoken);
    //         apiClient.interceptors.request.use((config)=>{
    //             config.headers.Authorization = btoken;
    //             return config;
    //         })
    //         return true
    //     }else{
    //         logout();
    //         return false;
    //     }
    //     }catch(error){
    //         console.error("Login failed", error);
    //         logout();
    //         return false;
    //     }
        
        
    // }

    async function login(username,password){
        try{
            const response= await(executeJwtAuthentication(username,password));
            if(response.status === 200){
                const jwttoken="Bearer " + response.data.token;
            setAuthenticated(true);

            setUsername(username);
            setBtoken(jwttoken);
            apiClient.interceptors.request.use((config)=>{
                config.headers.Authorization = jwttoken;
                return config;
            })
            return true
        }else{
            logout();
            return false;
        }
        }catch(error){
            console.error("Login failed", error);
            logout();
            return false;
        }
        
        
    }

    function logout(){
        setAuthenticated(false)
        setBtoken("");
        setUsername("");
    }
    return(
        <AuthContext.Provider value={{isAuthenticated, login,logout,username,token}}>
            {children}
        </AuthContext.Provider>
    );

}