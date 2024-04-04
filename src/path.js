import { createBrowserRouter } from "react-router-dom";

import { Layout } from "components/Layout";
import { Home } from "pages/Home";
import { Catalog } from "pages/Catalog";
import { Contact } from "pages/Contact";
import { ErrorPage } from "pages/Error";
import { Cart } from "pages/Cart";
import { Product } from "pages/product/index";
import { ActorsList } from "components/ActorList/index";
import { Reviews } from "components/Review/index";

export const pathBoard = {
  home: "/",
  catalog: "/catalog",
  contact: "/contact",
  cart: "/cart",
  product: "/product",
  actors: "/product/actors",
  reviews: "/product/reviews",
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
        path: "product",
        element: <Product />,
        children: [
          {
            path: "actors",
            element: <ActorsList />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
    ],
  },
]);

export default router;
