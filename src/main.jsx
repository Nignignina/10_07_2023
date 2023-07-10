import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WrapperProducts from "./router/products";

import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import "./index.css";
import Product from "./router/products/product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/locations",
        element: <WrapperProducts />,
      },
      {
        path: "/locations/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <h2>about</h2>,
      },

      {
        path: "/product",
        element: <h2>qui singola carta</h2>,
      },
      {
        path: "/contacts",
        element: <h2>contattaciii</h2>,
      },
    ],
  },
  ,
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
