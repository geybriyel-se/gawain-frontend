import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./login/Login";
import WelcomeComponent from "./welcome/Welcome";
import RouteWrapper from "./RouteWrapper";
import TodoList from "./todo-list/TodoList";
import Todo from "./todo/Todo";
import Logout from "./logout/Logout";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />
          <Route path="/login" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />
          <Route path="/welcome/:username" element={<RouteWrapper showSidebar={true}><WelcomeComponent /></RouteWrapper>} />
          <Route path="/list" element={<RouteWrapper showSidebar={true}><TodoList /></RouteWrapper>} />
          <Route path="/todo" element={<RouteWrapper showSidebar={true}><Todo /></RouteWrapper>} />
          <Route path="/logout" element={<RouteWrapper showSidebar={false}><Logout /></RouteWrapper>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
