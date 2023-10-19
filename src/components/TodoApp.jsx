import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./login/Login";
import WelcomeComponent from "./welcome/Welcome";
import RouteWrapper from "./RouteWrapper"; // Import the new component
import TodoList from "./todo-list/TodoList";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />
          <Route path="/login" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />
          <Route path="/welcome/:username" element={<RouteWrapper showSidebar={true}><WelcomeComponent /></RouteWrapper>} />
          <Route path="/list" element={<RouteWrapper showSidebar={true}><TodoList /></RouteWrapper>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
