import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Subscribe from "../components/Layout/Subscribe";
import ScrollToTop from "../components/Layout/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
};

export default RootLayout;
