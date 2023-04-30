import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreForm from "./components/StoreForm";
import ProductForm from "./components/app/ProductForm";
import AllStores from "./components/app/AllStores";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Auth from "./components/auth/Auth";
import ProtectedRoute from "./util/ProtectedRoute";
import Base from "./components/app/Base";
import AllProducts from "./components/app/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <LoginForm />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
      {
        path: "",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Base />,
          },
          {
            path: "store/create",
            element: <StoreForm />,
          },
          {
            path: "store",
            element: <AllStores />,
          },
          {
            path: "product",
            element: <AllProducts/>
          },
          {
            path: "product/create",
            element: <ProductForm />,
          },
        ],
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
