// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import UserDashboard from "./pages/user/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ProtectedRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role?: "admin" | "user";
}) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/Login" replace />;
  if (role && user.role !== role) return <Navigate to="/Login" replace />;

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />

          <Route
            path="/admin/Dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user/Dashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
