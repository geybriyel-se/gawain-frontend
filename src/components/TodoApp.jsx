import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./login/Login";
import WelcomeComponent from "./welcome/Welcome";
import RouteWrapper from "./RouteWrapper";
import TodoList from "./todo-list/TodoList";
import Todo from "./todo/Todo";
import Logout from "./logout/Logout";
import ErrorPage from "./error/ErrorPage";
import AuthProvider, { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth()
  if (authContext.isAuthenticated) {
    return children
  }
  return <Navigate to='/' />
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />
            <Route path="/login" element={<RouteWrapper showSidebar={false}><LoginComponent /></RouteWrapper>} />

            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <RouteWrapper showSidebar={true}>
                    <WelcomeComponent />
                  </RouteWrapper>
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/list"
              element={
                <AuthenticatedRoute>
                  <RouteWrapper showSidebar={true}>
                    <TodoList />
                  </RouteWrapper>
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/todo"
              element={
                <AuthenticatedRoute>
                  <RouteWrapper showSidebar={true}>
                    <Todo />
                  </RouteWrapper>
                </AuthenticatedRoute>
              }
            />

            <Route path="/logout" element={<RouteWrapper showSidebar={false}><Logout /></RouteWrapper>} />
            <Route path="/error" element={<RouteWrapper showSidebar={false}><ErrorPage /></RouteWrapper>} />
            <Route path="*" element={<RouteWrapper showSidebar={false}><ErrorPage /></RouteWrapper>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
