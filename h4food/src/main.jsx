import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root/Root";
import Home from "./pages/Home/Home";
import AllFoodItems from "./pages/AllFoodItems/AllFoodItems";
import Blog from "./pages/Blog/Blog";
import Error from "./components/Error/Error";
import AuthProvider from "./providers/AuthProvider";
import Register from "./pages/Register/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import FoodDetails from "./components/FoodDetails/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allFoodItems",
        element: <AllFoodItems />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "allFoodItems/:id",
        element: <FoodDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster position="top-center" />
  </React.StrictMode>
);
