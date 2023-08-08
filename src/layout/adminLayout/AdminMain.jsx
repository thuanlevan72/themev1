import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AdminMain() {
  return (
    <div>
      <Header />
      <div className="flex overflow-hidden bg-white pt-16">
        <Navigation />
        <div
          id="main-content"
          className="h-full w-full bg-white relative overflow-y-auto lg:ml-64">
          <main className="min-h-[75vh] px-5 py-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
