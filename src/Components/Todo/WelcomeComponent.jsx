import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { retrievehelloworldpathvariable } from "./Api/HelloWorldApiService";
export default function WelcomeComponent(){
    const{username }=useParams();
    const[message, setMessage]=useState("");

    // function callHelloWorldRestApi() {
    //     retrievehelloWorldBean()
    //     .then((res) => { console.log(res); setMessage(res.data); })
    //     .catch((err)=> console.log(err))
    // }

    function callHelloWorldPathVariableRestApi() {
        retrievehelloworldpathvariable(username)
        .then((res) => { console.log(res); setMessage(res.data.message); })
        .catch((err)=> console.log(err))
    }
    
    return ( 
        <div className="welcome">
            <h1>Welcome {username}</h1>
            <div>   
                <h4>Manage Your Notes</h4> <Link to="/notes">here</Link>
            </div>
            <div>
                <button style={{margin:"20px"}} className="btn btn-success" onClick={callHelloWorldPathVariableRestApi}>Call Hello World</button>
            </div>

            <div>
                {message}
            </div>
        </div>
    )
}