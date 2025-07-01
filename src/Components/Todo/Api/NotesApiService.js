import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
});

export const  retrieveAllNotes = (username) => apiClient.get(`/user/${username}/notes`);

export const deleteNote=(username,id)=>apiClient.delete(`/user/${username}/notes/${id}`);