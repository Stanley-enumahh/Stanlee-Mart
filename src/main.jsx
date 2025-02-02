import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ShopContextProvider } from "./context/shopContext";
import Cart from "./components/cart";
import Login from "./components/registration/login";
import Register from "./components/registration/signUp";
import { ProductPreview } from "./components/productPreview";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/Product-Preview",
    element: <ProductPreview />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ShopContextProvider>
);
