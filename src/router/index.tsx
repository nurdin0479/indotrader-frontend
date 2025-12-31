import {
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';

// Import components
import AdminLayout from '../components/layout/AdminLayout';
import Login from '../pages/auth/Login';
import AdminDashboard from '../pages/admin/Dashboard';
import UserDashboard from '../pages/user/Dashboard';

// Root route (with layout)
const rootRoute = createRootRoute({
  component: AdminLayout,
});

// Routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/dashboard',
  component: AdminDashboard,
});

const userDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: UserDashboard,
});

// Build tree
const routeTree = rootRoute.addChildren([
  loginRoute,
  adminDashboardRoute,
  userDashboardRoute,
]);

// Export router
export const router = createRouter({ routeTree });

// Type registration (wajib)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}