import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import Navigation from "./Navigation";
import Footer from "../compoent/Footer";

function Main() {
  return (
    <>
      <HeaderLayout />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
