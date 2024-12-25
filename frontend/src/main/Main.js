import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Common/Home";
import AboutUs from "../Common/AboutUs";
import Products from "../Common/Products";
import ContactUs from "../Common/ContactUs";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
