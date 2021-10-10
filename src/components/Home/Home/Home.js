import React from "react";
import homeImage from "../../../imgs/illustration-hero.svg";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <HeroSection />
        </div>
        <div className="col-lg-6">
          <img
            src={homeImage}
            alt="Home page image"
            className="hero-image img-fluid d-none d-lg-block"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
