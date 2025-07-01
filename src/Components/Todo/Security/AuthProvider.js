import { createContext, useContext, useState } from "react";

const AuthContext= createContext();
export const useAuth= ()=>useContext(AuthContext);
export default function AuthProvider({children}){
    const[isAuthenticated, setAuthenticated] = useState(false);
    const[username, setUsername] = useState("");

    function login(username,password){
        if(username==="Noor Alam" && password==="1234"){
            setAuthenticated(true);
            setUsername(username);
            return true;

        }else{
            setAuthenticated(false);
            setUsername("");
            return false;
        }
    }

    function logout(){
        setAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated, login,logout,username}}>
            {children}
        </AuthContext.Provider>
    );

}