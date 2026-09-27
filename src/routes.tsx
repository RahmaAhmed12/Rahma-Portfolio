import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./features/home/home";

const withSuspense = (component: React.ReactNode) => (
  //   <Suspense fallback={<PageLoader />}>{component}</Suspense>
  <Suspense>{component}</Suspense>
);

export const routes = createBrowserRouter([
  { path: "/", element: withSuspense(<Home />) },
]);
