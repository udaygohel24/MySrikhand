import React from "react";
import Navbar from "../Navbar/Navbar";
import RajbhogI from "../image/KATHIYAWAD_SRIKHND__1_-removebg-preview.png";
import Elich from "../image/ElichiSrikhand__1_-removebg-preview.png";
import Dry from "../image/DrySrikhand__1_-removebg-preview.png";
import Mango from "../image/Mango-srikhand__1_-removebg-preview.png";
import Butter from "../image/ButterScotch-srikhandDrySrikhand__1_-removebg-preview.png";
import Pista from "../image/pista-srikhand__1_-removebg-preview.png";

import DeliveryBoyImage from "../image/dilevryboy.png";

const Home = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <section className="home-page">
        <div className="container">
          <div className="home-page-wrapper">
            <div className="home-right">
              <div className="dilevry-img">
                <img src={DeliveryBoyImage} alt="" />
              </div>
            </div>
            <div className="home-left">
              <div class="box">
                <div class="content">
                  <img src={RajbhogI} />
                  <h2>
                    Kathiyawad <br />
                    <span>
                      Srikhand
                      <span />
                    </span>
                  </h2>
                  <a href="/product">Oder Now</a>
                </div>
              </div>
              <div className="heading">
                <h2>Click in Image</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-section">
        <div className="container">
          <div className="img-details">
            <div className="elaichi">
              <img src={Elich} alt="" />
              <div className="elaichi-heading">
                <h2>Elaichi Srikhand</h2>
              </div>
              <div className="elaichi-paregraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque facere veritatis non incidunt ipsum similique. Fugit,
                  quam veniam quasi maxime, necessitatibus sunt eaque
                  aspernatur, sed magni alias exercitationem at!
                </p>
              </div>
            </div>
            <div className="rajbhog">
              <img src={RajbhogI} alt="" />
              <div className="rajbhog-heading">
                <h2>Rajbhog Shrikhand</h2>
              </div>
              <div className="rajbhog-paregraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque facere veritatis non incidunt ipsum similique. Fugit,
                  quam veniam quasi maxime, necessitatibus sunt eaque
                  aspernatur, sed magni alias exercitationem at!
                </p>
              </div>
            </div>
            <div className="dry">
              <img src={Dry} alt="" />
              <div className="dry-heading">
                <h2>Dry-Fruits Shrikhand</h2>
              </div>
              <div className="dry-paregraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque facere veritatis non incidunt ipsum similique. Fugit,
                  quam veniam quasi maxime, necessitatibus sunt eaque
                  aspernatur, sed magni alias exercitationem at!
                </p>
              </div>
            </div>
            <div className="mango">
              <img src={Mango} alt="" />
              <div className="mango-heading">
                <h2>Mango Shrikhand</h2>
              </div>
              <div className="mango-paregraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque facere veritatis non incidunt ipsum similique. Fugit,
                  quam veniam quasi maxime, necessitatibus sunt eaque
                  aspernatur, sed magni alias exercitationem at!
                </p>
              </div>
            </div>
            <div className="rajbhog">
              <img src={Butter} alt="" />
              <div className="butter-heading">
                <h2>ButterScotch Shrikhand</h2>
              </div>
              <div className="butter-paregraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque facere veritatis non incidunt ipsum similique. Fugit,
                  quam veniam quasi maxime, necessitatibus sunt eaque
                  aspernatur, sed magni alias exercitationem at!
                </p>
              </div>
            </div>
            <div className="rajbhog">
              <img src={Pista} alt="" />
              <div className="pista-heading">
                <h2>Pista Shrikhand</h2>
              </div>
              <div className="pista-paregraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque facere veritatis non incidunt ipsum similique. Fugit,
                  quam veniam quasi maxime, necessitatibus sunt eaque
                  aspernatur, sed magni alias exercitationem at!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
