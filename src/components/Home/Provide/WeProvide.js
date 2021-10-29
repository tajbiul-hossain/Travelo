import React from "react";
import "./WeProvide.css";
const Dentists = () => {
  return (
    <div className="container pt-4">
      <div>
        <h2 className="mt-5 section-heading">We Provide</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-car fa-4x"></i>
            <h3>Comfortable Journey</h3>
            <p>Live with no excuses and travel with no regrets</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-hotel fa-4x"></i>
            <h3>Luxurious Hotel</h3>
            <p>Luxury is in each detail</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-globe-americas fa-4x"></i>
            <h3>Travel Guide</h3>
            <p>It feels good to be lost in the right direction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dentists;
