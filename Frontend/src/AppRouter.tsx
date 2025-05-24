import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/home/index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
      },
      { path: "shop/product", element: <Products /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
