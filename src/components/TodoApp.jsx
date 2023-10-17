import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import SidebarComponent from "./SidebarComponent";


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <SidebarComponent />
                <Routes>
                    {/* <Route path='/' element={ <LoginComponent /> } /> */}
                    <Route path='/login' element={<LoginComponent />} />
                    
                    <Route path='/welcome/:username' element={ <WelcomeComponent /> } />
                </Routes>
            </BrowserRouter>

        </div>
    )
}