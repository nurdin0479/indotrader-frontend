// src/components/layout/AdminLayout.tsx
import { Outlet } from "@tanstack/react-router";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="p-4 bg-black shadow">
        <h1 className="text-xl font-bold">IndoTrader Admin</h1>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-800 text-center text-sm">
        © 2026 IndoTrader
      </footer>
    </div>
  );
}