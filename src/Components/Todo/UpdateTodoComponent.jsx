import { useNavigate, useParams } from "react-router-dom";
import { createNote, getNote, updateNote } from "./Api/NotesApiService";
import { useAuth } from "./Security/AuthProvider";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function UpdateTodoComponent() {
    const authContext=useAuth();
    const username = authContext.username;
    const{id}=useParams();
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [targetDate, setTargetDate] = useState(null);
    const navigate=useNavigate();
    
    useEffect(() => retrieveNote(), [id, username]);

    function retrieveNote() {
        if(Number(id) !== -1) {
            getNote(username, id)
            .then((res) => {
                setDescription(res.data.description);
                setTitle(res.data.title);
                setTargetDate(res.data.localDate.toString());
            })
            .catch((err) => console.log(err));
        }
    }
    function handleSubmit(values) {
       const note={
            id: id,
            username: username,
            title: values.title,
            description: values.description,
            localDate: values.targetDate
        };
        if(Number(id)===-1){
            createNote(username, note)
            .then((res)=>{
                console.log("Note created successfully", res.data);
                navigate("/notes");
            })
            .catch((err)=>console.log("Error creating note", err));
        }else{
            updateNote(username, id, note)
            .then((res)=>{
                console.log("Note updated successfully", res.data);
                navigate("/notes");
            })
            .catch((err)=>console.log("Error updating note", err));
        }
    }

    function validateValues(values) {
        let erros={};
        if(!values.title || values.title.length < 5) {
            erros.title = "Title should have at least 5 characters";
        }
        if(!values.description || values.description.length < 5) {
            erros.description = "Description should have at least 5 characters";
        }
        if (!values.targetDate || values.targetDate === "") {
            erros.targetDate = "Please select a valid date";
        } else {
            const selectedDate = new Date(values.targetDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0); 
            if (selectedDate < today) {
                erros.targetDate = "Please select a date today or in the future";
            }
        }
        return erros;
        }
        
    return (
        <div className="container">
            <h2>Enter/Edit note</h2>
            <div>
            <Formik initialValues={{title, description, targetDate}}
                        enableReinitialize={true}
                        onSubmit={handleSubmit}
                        validate={validateValues}
                        validateOnChange={false}
                        validateOnBlur={false}
                        >
                {
                    ()=>(
                        <Form >
                            <ErrorMessage name="title" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                            <fieldset className="form-group">
                                <label>Title</label>
                                <Field type="text" className="form-control" name="title"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit" >Save</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            </div>
        </div>
    )
}