import React from "react";
import HomePage from "../page/home/HomePage";
import Login from "../page/LoginPage/Login";
import Register from "../page/LoginPage/Register";
import ResetPass from "../page/LoginPage/ResetPass";
import NoMath from "../compoent/NoMath";
import Products from "../compoent/Products";
import Profile from "../compoent/Profile";
import ProductDetail from "../compoent/ProductDetail";
import Main from "../layout/Main";
import AdminMain from "../layout/adminLayout/AdminMain";
import StatisticsAdmin from "../layout/adminLayout/componentAdmin/StatisticsAdmin";
import TableUserAdmin from "../layout/adminLayout/componentAdmin/TableUserAdmin";
import FormUploadAdmin from "../layout/adminLayout/componentAdmin/FormUploadAdmin";
import LoginAdmin from "../layout/adminLayout/componentAdmin/LoginAdmin";
import RegisterAdmin from "../layout/adminLayout/componentAdmin/RegisterAdmin";
import FormAdmin from "../layout/adminLayout/componentAdmin/FormAdmin";
import TableProductAdmin from "../layout/adminLayout/componentAdmin/TableProductAdmin";
import Cart from "../compoent/Cart";
import CheckOut from "../compoent/CheckOut";
let routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ResetPass /> },
      { path: "/products", element: <Products /> },
      { path: "/profile", element: <Profile /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <CheckOut /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminMain />,
    children: [
      {
        index: true,
        element: <StatisticsAdmin />,
      },
      { path: "users", element: <TableUserAdmin /> },
      { path: "products", element: <TableProductAdmin /> },
      { path: "form-upload", element: <FormUploadAdmin /> },
      { path: "form-admin", element: <FormAdmin /> },
    ],
  },
  {
    path: "auth/login",
    element: <LoginAdmin />,
  },
  {
    path: "auth/register",
    element: <RegisterAdmin />,
  },
  {
    path: "*",
    element: <NoMath />,
  },
];
export default routes;
