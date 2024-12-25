import React from "react";
import Navbar from "../Navbar/Navbar";
import RajbhogI from "../image/KATHIYAWAD_SRIKHND__1_-removebg-preview.png";
import Elichi from "../image/ElichiSrikhand__1_-removebg-preview.png";
import Dry from "../image/DrySrikhand__1_-removebg-preview.png";
import Mango from "../image/Mango-srikhand__1_-removebg-preview.png";
import ButterScotch from "../image/ButterScotch-srikhandDrySrikhand__1_-removebg-preview.png";
import Pista from "../image/pista-srikhand__1_-removebg-preview.png";
import { FcLikePlaceholder } from "react-icons/fc";
import ContactUs from "./ContactUs";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="products-container">
        {/* Product 1 */}
        <div className="product-card">
          <img src={Elichi} alt="Product 1" />
          <span className="like-icon">
            <FcLikePlaceholder />
          </span>
          <h3>Elichi Srikhand</h3>
          <p className="price">₹300 for one</p>
          <p className="description">Cream Test 😋😋...</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        {/* Product 2*/}
        <div className="product-card">
          <img src={RajbhogI} alt="Product 2" />
          <span className="like-icon">
            <FcLikePlaceholder />
          </span>
          <h3>Rajbhog Srikhand</h3>
          <p className="price">₹350 for one</p>
          <p className="description">Cream Test 😋😋...</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        {/* Product 3*/}
        <div className="product-card">
          <img src={Dry} alt="Product 3" />
          <span className="like-icon">
            <FcLikePlaceholder />
          </span>
          <h3>Dry-Fruit Srikhand</h3>
          <p className="price">₹350 for one</p>
          <p className="description">Cream Test 😋😋...</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        {/* Product 4*/}
        <div className="product-card">
          <img src={Mango} alt="Product 4" />
          <span className="like-icon">
            <FcLikePlaceholder />
          </span>
          <span className="mango-span">Signebal </span>
          <h3>Mango Srikhand</h3>
          <p className="price">₹350 for one</p>
          <p className="description">Cream Test 😋😋...</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        {/* Product 5*/}
        <div className="product-card">
          <img src={ButterScotch} alt="Product 5" />
          <span className="like-icon">
            <FcLikePlaceholder />
          </span>
          <h3>ButterScotch Srikhand</h3>
          <p className="price">₹350 for one</p>
          <p className="description">Cream Test 😋😋...</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        {/* Product 6*/}
        <div className="product-card">
          <img src={Pista} alt="Product 6" />
          <span className="like-icon">
            <FcLikePlaceholder />
          </span>
          <h3>Pista Srikhand</h3>
          <p className="price">₹400 for one</p>
          <p className="description">Cream Test 😋😋...</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      {/* <ContactUs /> */}
    </div>
  );
};

export default Products;
