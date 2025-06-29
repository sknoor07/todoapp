import ErrorComponent from "./ErrorComponent";
import ListTodoComponent from "./ListTodoComponent";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import { BrowserRouter,Routes,Route} from "react-router-dom";

export default function TodoApp() {
    return (
        <div className="todoApp">
            <h2>Notes App</h2>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/welcome/:username" element={<WelcomeComponent />} />
                <Route path="/notes" element={<ListTodoComponent />} />
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}