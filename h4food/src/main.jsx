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
import FoodOrdering from "./pages/FoodOrdering/FoodOrdering";
import MyAddedFood from "./pages/MyAddedFood/MyAddedFood";
import AddFood from "./pages/AddFood/AddFood";
import MyOrderedDFood from "./pages/MyOrderedFood/MyOrderedDFood";
import UpdateFood from "./pages/MyAddedFood/UpdateFood";
import PrivateRoute from "./routes/PrivateRoute";

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
        loader: () =>
          fetch(
            "https://b8a11-server-side-tanvir0908.vercel.app/api/v1/foodsCount"
          ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "myAddedFoods",
        element: (
          <PrivateRoute>
            <MyAddedFood />
          </PrivateRoute>
        ),
      },
      {
        path: "addNewFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "myOrderedFoods",
        element: (
          <PrivateRoute>
            <MyOrderedDFood />
          </PrivateRoute>
        ),
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
        path: "foodDetails/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(
            `https://b8a11-server-side-tanvir0908.vercel.app/api/v1/foodDetails/${params.id}`
          ),
      },
      {
        path: "updateFoodDetails/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a11-server-side-tanvir0908.vercel.app/api/v1/foodDetails/${params.id}`
          ),
      },
      {
        path: "foodOrder/:id",
        element: (
          <PrivateRoute>
            <FoodOrdering />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a11-server-side-tanvir0908.vercel.app/api/v1/foodDetails/${params.id}`
          ),
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
