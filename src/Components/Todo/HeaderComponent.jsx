import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Security/AuthProvider";


export default function HeaderComponent(){
    const authContext= useAuth();
    const navigate= useNavigate();
    function logout(){
        
        authContext.logout()
        navigate("/logout")
    }
    return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="https://www.google.com" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-google" viewBox="0 0 26 26">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>{authContext.isAuthenticated&&<Link to="/welcome/Noor Alam" className="nav-link px-2 link-secondary">Welcome</Link>}</li>
        <li>{authContext.isAuthenticated&&<Link to="/notes" className="nav-link px-2 link-dark">Notes</Link>}</li>
        {/* <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>  */}
      </ul>

      <div className="col-md-3 text-end">
        {authContext.isAuthenticated===false&&<button type="button" className="btn btn-outline-primary me-2" onClick={()=>navigate("/login")}>Login</button>}
        {authContext.isAuthenticated && <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>}
      </div>
    </header>
  </div>
    );
}

