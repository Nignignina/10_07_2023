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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/locations",
    element: <WrapperProducts />,
  },
  {
    path: "/about",
    element: <h2>about</h2>,
  },

  {
    path: "/product/:id",
    element: <h2>qui singola carta</h2>,
  },
  {
    path: "/contacts",
    element: <h2>contattaciii</h2>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
