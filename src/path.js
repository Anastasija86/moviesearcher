import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Contact from "pages/Contact";
import Error from "pages/Error";
import Cart from "pages/Cart";
import { Registration } from "pages/Registration";
import { LogIn } from "pages/LogIn";
import { FavoriteList } from "pages/favoriteList/FavoriteList";

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
    errorElement: <Error />,
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
