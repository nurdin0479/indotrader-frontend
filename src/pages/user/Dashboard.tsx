// src/pages/user/Dashboard.tsx
import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function UserDashboard() {
  const { user, logout } = useAuth();
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <div>
          <span className="mr-4 text-sm">Signed in as {user?.email}</span>
          <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">My Signals</div>
        <div className="p-4 bg-white shadow rounded">Notification Settings</div>
      </div>
    </div>
  );
}
