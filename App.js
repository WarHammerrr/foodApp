import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import RestaurantDetails from "./Components/RestaurantDetails";
import CartItems from "./Components/CartItems";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Profile from "./Components/Profile";
import ReduxStore from "./Utils/ReduxStore";
import { Provider } from "react-redux";

const AppLayout = () => {
  return (
    <Provider store={ReduxStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path:"/cart",
        element:<CartItems/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
