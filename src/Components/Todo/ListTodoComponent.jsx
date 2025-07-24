import { useEffect, useState } from "react";
import { deleteNote, retrieveAllNotes } from "./Api/NotesApiService";
import { useAuth } from "./Security/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ListTodoComponent(){
    //const today= new Date();
    //const targetdate= new Date(today.getFullYear()+3,today.getMonth(),today.getDay());
    const [notes, setNotes] = useState([]);
    const[message, setMessage] = useState(null);
    const authContext=useAuth();
    const username = authContext.username;
    const navigate= useNavigate();
    // const notes=[
    //     {id:1,title: "hello World",description:"Hello World",targetdate:targetdate},
    //     {id:2,title: "hello Noor",description:"Hello to Noor",targetdate:targetdate},
    //     {id:3,title: "hello Pratham",description:"Hello to Pratahm",targetdate:targetdate},
    // ]
    useEffect(() => {
        retrieveAllNotes(username)
            .then((res) => {
                console.log(res.data)
                setNotes(res.data)
            })
            .catch((err) => console.log(err));
    }, [username]);

    // function retrieveAllUserNotes(){
    //     retrieveAllNotes(username)
    //     .then((res)=>{
    //         console.log(res.data)
    //          setNotes(res.data)
    //         })
    //     .catch((err)=>console.log(err));
    // }

     function handledeletingNote(id){
        deleteNote(username,id)
        .then(()=>{
            setMessage(`Note with id ${id} deleted successfully`);
            retrieveAllNotes(username)
            .then((res)=>setNotes(res.data))

        })
        .catch((err)=>console.log(err));
    }

    function updateNote(id){
        navigate(`/note/${id}`);
    }

    return(
        <div className="container">
            <h3>All notes</h3>
            {message && <div className="alert alret-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notes.map(
                                note=>(
                                    <tr key={note.id}>
                                        <td>{note.id}</td>
                                        <td>{note.title}</td>
                                        <td>{note.description}</td>
                                        <td>{note.localDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={ ()=>handledeletingNote(note.id)}>delete</button></td>
                                        <td><button className="btn btn-success" onClick={()=>updateNote(note.id)}>update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <div className="btn btn-success m-5" onClick={() => navigate(`/note/-1`)}>Create Note</div>
            </div>
        </div>
    )
}