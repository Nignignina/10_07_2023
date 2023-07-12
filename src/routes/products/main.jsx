// we split  Route in  main, in this one we put the instructions
import Product from "./product";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./index";
import WrapperProducts from "./index.jsx";
import Defaultlayout from "../../layout/defauultLayout";
import Login from "../../Componets/login";
import Dashboard from "./Dashboard";
import Error from "../Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Defaultlayout />} errorElement={<Error />}>
      <Route path="/" element={<h1> Home</h1>} />
      <Route path="/locations" element={<WrapperProducts />} />
      <Route path="/locations/:id" element={<Product />} />
      <Route path="/about" element={<h1> about</h1>} />
      <Route path="/contacts" element={<h1> contatcs</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

// [
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/locations",
//         element: <WrapperProducts />,
//       },
//       {
//         path: "/locations/:id",
//         element: <Product />,
//       },
//       {
//         path: "/about",
//         element: <h2>about</h2>,
//       },

//       {
//         path: "/product",
//         element: <h2>qui singola carta</h2>,
//       },
//       {
//         path: "/contacts",
//         element: <h2>contattaciii</h2>,
//       },
//     ],
//   },
//   ,
// ];
