import { Link, useParams } from "react-router-dom"
export default function WelcomeComponent(){
    const{username }=useParams();
    return (
        <div className="welcome">
            <h1>Welcome {username}</h1>
            <div>
                <h4>Manage Your Notes</h4> <Link to="/notes">here</Link>
            </div>
        </div>
    )
}