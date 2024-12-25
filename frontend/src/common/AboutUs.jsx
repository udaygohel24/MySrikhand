import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../image/kathiyawad 01.png";
import leftImage from "../image/ElichiSrikhand__1_-removebg-preview.png";
import rightImage from "../image/pista-srikhand__1_-removebg-preview.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="header-banner">
        <div className="side-image left">
          <img src={leftImage} alt="Left design" />
        </div>

        <div className="about-hero">
          <img src={logo} className="Alogo" />
          <p>Your Trusted Partner in Excellence</p>
        </div>

        <div className="side-image right">
          <img src={rightImage} alt="Right design" />
        </div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Saikhand is a leading organization committed to delivering
            exceptional products and services to our valued customers. With
            years of experience and dedication, we have established ourselves as
            a trusted name in the industry.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide innovative solutions while maintaining the
            highest standards of quality and customer satisfaction. We strive to
            exceed expectations and create lasting relationships with our
            clients.
          </p>
        </div>

        <div className="about-grid">
          <div className="grid-item">
            <h3>Quality First</h3>
            <p>
              We never compromise on quality and ensure that every product meets
              our rigorous standards.
            </p>
          </div>

          <div className="grid-item">
            <h3>Customer Focus</h3>
            <p>
              Our customers are at the heart of everything we do, and their
              satisfaction is our top priority.
            </p>
          </div>

          <div className="grid-item">
            <h3>Innovation</h3>
            <p>
              We continuously evolve and adapt to bring you the latest and best
              solutions in the market.
            </p>
          </div>

          <div className="grid-item">
            <h3>Expert Team</h3>
            <p>
              Our team of professionals brings years of experience and expertise
              to every project.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Integrity in all our dealings</li>
            <li>Commitment to excellence</li>
            <li>Innovation and continuous improvement</li>
            <li>Respect for our customers and employees</li>
            <li>Environmental responsibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
