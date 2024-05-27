import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { Home } from "../pages/home";
import DetailsPage from "../pages/detailPage";

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
    path: "/:id",
    element: (
      <Layout>
        <DetailsPage />
      </Layout>
    ),
  },
  {
    path: "/new",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/toprated",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/genre/:genre",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);
