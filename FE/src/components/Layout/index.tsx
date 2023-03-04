import React from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";
import FoodIcon from "../../assets/icons/FoodIcon";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Link
        to={"/"}
        className="flex items-center gap-2 bg-primary text-white text-2xl font-semibold py-2 px-12"
      >
        <FoodIcon />
        Alan Resto
      </Link>
      <Navbar />
      <div className="min-h-[80vh] mx-16">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
