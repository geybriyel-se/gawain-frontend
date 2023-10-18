import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./login/Login";
import WelcomeComponent from "./welcome/Welcome";
import RouteWrapper from "./RouteWrapper"; // Import the new component

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />
          <Route path="/login" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />
          <Route path="/welcome/:username" element={<RouteWrapper showSidebar={true}><WelcomeComponent /></RouteWrapper>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
