import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);
