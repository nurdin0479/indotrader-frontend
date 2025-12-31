// src/router/index.tsx
import {
  createRouter,
  createRootRoute,
  createRoute,
  lazyRouteComponent,
  NotFoundRoute,
} from "@tanstack/react-router";

// ✅ Lazy-load components (tanpa loadingComponent)
const AdminLayout = lazyRouteComponent(
  () => import("../components/layout/AdminLayout")
);

const Login = lazyRouteComponent(
  () => import("../pages/auth/Login")
);

const AdminDashboard = lazyRouteComponent(
  () => import("../pages/admin/Dashboard")
);

const UserDashboard = lazyRouteComponent(
  () => import("../pages/user/Dashboard")
);

// ✅ Root route dengan pending/error UI global
const rootRoute = createRootRoute({
  pendingComponent: () => (
    <div className="p-8 text-center">Loading app...</div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-8 text-red-500">
      <h2>⚠️ Application Error</h2>
      <pre>{error.message}</pre>
    </div>
  ),
});

// ✅ Public route (login)
const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
});

const loginRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: "/",
  component: Login,
});

// ✅ Admin layout group
const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "admin-layout",
  component: AdminLayout,
  // ✅ Tambahkan pending UI spesifik untuk layout ini
  pendingComponent: () => (
    <div className="p-8 text-center">Loading admin layout...</div>
  ),
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "/admin/dashboard",
  component: AdminDashboard,
  pendingComponent: () => (
    <div className="p-8">Loading admin dashboard...</div>
  ),
});

const userDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "/dashboard",
  component: UserDashboard,
  pendingComponent: () => (
    <div className="p-8">Loading user dashboard...</div>
  ),
});

// ✅ 404 Not Found
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => (
    <div className="p-8 text-center">
      <h1 className="text-2xl mb-4">404</h1>
      <p>Halaman tidak ditemukan.</p>
    </div>
  ),
});

// ✅ Build route tree
const routeTree = rootRoute
  .addChildren([
    publicRoute.addChildren([loginRoute]),
    adminLayoutRoute.addChildren([adminDashboardRoute, userDashboardRoute]),
  ])
  .addChildren([notFoundRoute]);

// ✅ Create router
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingMs: 300,
  defaultPendingMinMs: 500,
});

// ✅ Type registration
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}