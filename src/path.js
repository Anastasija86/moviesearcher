import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "components/Layout";
import { Home } from "pages/Home";
import { Catalog } from "pages/Catalog";
import { Contact } from "pages/Contact";
import { ErrorPage } from "pages/Error";
import { Cart } from "pages/Cart";
import { Product } from "pages/product/index";
import { Actors } from "components/ActorList/index";
import { Reviews } from "components/Review/index";

export const pathBoard = {
  home: "/",
  catalog: "/catalog",
  contact: "/contact",
  cart: "/cart",
  registration: "/registration",
  authentication: "/logIn",
  favoriteList: "/favoriteList",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "logIn",
        element: <LogIn />,
      },
      {
        path: "favoriteList",
        element: <FavoriteList />,
      },
    ],
  },
]);

export default router;
