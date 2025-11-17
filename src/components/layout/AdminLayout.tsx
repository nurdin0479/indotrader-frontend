import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/admin/users"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Users
            </Link>
          </li>

          <li>
            <Link
              to="/admin/settings"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
