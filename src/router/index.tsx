// src/router/index.tsx
import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

// 🔹 Layout sederhana (inline, tanpa file terpisah dulu — untuk testing)
const AppLayout = () => (
  <div className="min-h-screen bg-gray-900 text-white">
    <header className="p-4 bg-black">Admin Panel</header>
    <main className="p-6">
      <Outlet />
    </main>
  </div>
);

// 🔹 Component dummy (pastikan ada)
const Login = () => <div>Login Page</div>;
const Dashboard = () => <div>Dashboard</div>;

// 🔹 Routes
const rootRoute = createRootRoute({
  component: AppLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Login,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([loginRoute, dashboardRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}