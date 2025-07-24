import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
});


export const  retrieveAllNotes = (username) => apiClient.get(`/user/${username}/notes`);

export const deleteNote=(username,id)=>apiClient.delete(`/user/${username}/notes/${id}`);

export const getNote=(username,id)=>apiClient.get(`/user/${username}/notes/${id}`);

export const updateNote=(username,id,note)=>apiClient.put(`/user/${username}/notes/${id}`, note);

export const createNote=(username,note)=>apiClient.post(`/user/${username}/notes`, note);