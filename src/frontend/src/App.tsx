import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BranchDetailPage from "./pages/BranchDetailPage";
import BranchesPage from "./pages/BranchesPage";
import HomePage from "./pages/HomePage";
import PhilosopherProfilePage from "./pages/PhilosopherProfilePage";
import PhilosophersPage from "./pages/PhilosophersPage";
import QuotesPage from "./pages/QuotesPage";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const philosophersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/philosophers",
  component: PhilosophersPage,
});

const philosopherProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/philosophers/$id",
  component: PhilosopherProfilePage,
});

const branchesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/branches",
  component: BranchesPage,
});

const branchDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/branches/$name",
  component: BranchDetailPage,
});

const quotesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quotes",
  component: QuotesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  philosophersRoute,
  philosopherProfileRoute,
  branchesRoute,
  branchDetailRoute,
  quotesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
