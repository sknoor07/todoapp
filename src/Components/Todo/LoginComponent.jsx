import { useState } from 'react';
import './LoginComponent.css';
import { useNavigate } from 'react-router-dom';
export default function LoginComponent(){
    const[username, setusername] =useState("")
    const[password, setpassword] =useState("")
    const[successmessage, setsuccessmessage] =useState(false)
    const[errormessage, seterrormessage] =useState(false)
    const navigate=useNavigate();

    function handleusername(event){
        setusername(event.target.value)
    }

    function handlepassword(event){
        setpassword(event.target.value)
    }

    function handlesubmit(){
        if(username==="Noor Alam" && password==="1234"){
            navigate(`/welcome/${username}`)

        }else{
            seterrormessage(true)
            setsuccessmessage(false)
        }
    }
    return (
        <div className="login" >
            <div >
                <label>User Name</label>
                <input type="text" placeholder="Enter your username" name="username" className="username" value={username} onChange={handleusername}/>
            </div>
            <div >
                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="password" className="password" value={password} onChange={handlepassword}/>
            </div>
            <div className="submitbutton">
                <button type="submit" name="login" style={{borderRadius:"20px", padding:"20px", fontSize:"15px"}} onClick={handlesubmit}>Login</button>
            </div>
            {successmessage&& <div>Login Successful</div>}
            {errormessage&& <div>Login Failed</div>}
        </div>
    )
}