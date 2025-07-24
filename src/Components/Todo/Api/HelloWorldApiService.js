
import { apiClient } from "./ApiClient";



export default function retrievehelloWorldBean(){
    return apiClient.get("/hello-world")
}

export const retrievehelloworldpathvariable=(username,token)=>{
    return apiClient.get(`/Hello-world-path-varibale/${username}`,{headers:{Authorization: token}})
}

