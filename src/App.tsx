import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./components/login/login";
import RoleSelection from "./components/login/RoleSelection";
import AdminDashboard from "./components/Admin/Dashboard";
import StudentDashboard from "./components/student/StudentDashboard";

type Role = "admin" | "student" | null;

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<Role>(null);

  return (
    <Router>
      <Routes>
        {/* Default route: redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Login route */}
        <Route
          path="/login"
          element={
            <LoginPage
              onLogin={() => {
                setIsAuthenticated(true);
              }}
            />
          }
        />
        {/* Role selection route */}
        <Route
          path="/role"
          element={
            isAuthenticated ? (
              <RoleSelection
                onSelectRole={(selectedRole: Role) => {
                  setRole(selectedRole);
                }}
                // Navigation handled in RoleSelection
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Student dashboard route */}
        <Route
          path="/student"
          element={
            isAuthenticated && role === "student" ? (
              <StudentDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Admin dashboard route */}
        <Route
          path="/admin"
          element={
            isAuthenticated && role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Catch-all: redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
