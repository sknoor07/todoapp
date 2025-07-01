import axios from "axios";


const apiClient=axios.create({
    baseURL:"http://localhost:8080"
})

export default function retrievehelloWorldBean(){
    return apiClient.get("/hello-world")
}

export const retrievehelloworldpathvariable=(username)=>{
    return apiClient.get(`/Hello-world-path-varibale/${username}`)
}