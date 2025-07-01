import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodoComponent from "./ListTodoComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import AuthProvider, { useAuth } from "./Security/AuthProvider";
import UpdateTodoComponent from "./UpdateTodoComponent";
import WelcomeComponent from "./WelcomeComponent";
import { BrowserRouter,Routes,Route, Navigate, } from "react-router-dom";

export default function TodoApp() {
    
    function AuthenticatedRoute({children}){
        const authContext=useAuth(); 
        if(authContext.isAuthenticated){
            return children;
        }else{
            return <Navigate to="/" />
        }
    }
    return (
        <div className="todoApp">
            <h2>Notes App</h2>
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/welcome/:username" element={<AuthenticatedRoute><WelcomeComponent /></AuthenticatedRoute>} />
                <Route path="/notes" element={<AuthenticatedRoute><ListTodoComponent /></AuthenticatedRoute>} />
                <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
                <Route path="/note/:id" element={<AuthenticatedRoute><UpdateTodoComponent /></AuthenticatedRoute>} />
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
            </BrowserRouter>
            <FooterComponent />
            </AuthProvider>
        </div>
    )
}