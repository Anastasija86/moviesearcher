import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "components/Layout";
import { Popular } from "pages/Popular";
import { TopRated } from "pages/TopRated";
import { Upcoming } from "pages/Upcoming";
import { ErrorPage } from "pages/Error";
import { Search } from "pages/Search";
import { Product } from "pages/product/index";
import { Actors } from "components/ActorList/index";
import { Reviews } from "components/Review/index";
import { Cart } from "pages/Cart";
import { Registration } from "pages/Registration";
import { LogIn } from "pages/LogIn";
import { FavoriteList } from "pages/favoriteList/FavoriteList";
import { Trailer } from "components/Trailer";

export const pathBoard = {
  home: "/",
  topRaited: "/topRaited",
  upcoming: "/upcoming",
  contact: "/contact",
  search: "/search",
  PRODUCT: "/product",
  cart: "/cart",
  PRODUCT_ACTORS: "/product/actors",
  PRODUCT_REVIEWS: "/product/reviews",
  PRODUCT_TRAILER: "/product/trailer",
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
        element: <Popular />,
      },
      {
        path: "product/:productId",
        element: <Product />,
        children: [
          {
            path: "actors",
            element: <Actors />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "trailer",
            element: <Trailer />,
          },
        ],
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
      {
        path: "topRaited",
        element: <TopRated />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "search/:name",
        element: <Search />,
      },
    ],
  },
]);

export default router;
