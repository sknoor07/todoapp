import { apiClient } from "./ApiClient"

export const executebasicauthentication=(token)=>{
    return apiClient.get(`/basicauth`,{headers:{Authorization: token}})
}

export const executeJwtAuthentication=(username,password)=>{
    return apiClient.post(`/authenticate`,{username, password})
}