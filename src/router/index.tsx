import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import AppLayout from "../components/layout/AdminLayout";
import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import UserDashboard from "../pages/user/Dashboard";

const rootRoute = createRootRoute({
  component: AppLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Login,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard",
  component: AdminDashboard,
});

const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: UserDashboard,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  adminRoute,
  userRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
