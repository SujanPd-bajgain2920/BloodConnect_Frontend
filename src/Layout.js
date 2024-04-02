import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function Layout() {
  return (
    <div>
      <>
        <Navbar />
        <Outlet />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default Layout;
