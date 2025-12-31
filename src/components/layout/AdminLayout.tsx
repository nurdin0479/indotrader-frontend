// src/components/layout/AdminLayout.tsx
import { Outlet } from "@tanstack/react-router";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-black">Admin Panel</header>
      <main className="p-6">
        <Outlet /> {/* ✅ Wajib */}
      </main>
    </div>
  );
}