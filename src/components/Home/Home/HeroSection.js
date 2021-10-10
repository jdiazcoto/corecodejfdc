import React from "react";

const HeroSection = () => {
  return (
    <>
      <h1 className="hero-heading mb-0">
        Move work <br /> forward
      </h1>
      <div className="row">
        <div className="col-lg-10">
          <p className="lead text-muted mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur. Eiusmod tempor incididunt.
          </p>
        </div>
      </div>
      <form action="#" className="subscription-form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Sign Up to our Newsletter"
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </form>
    </>
  );
};

export default HeroSection;
