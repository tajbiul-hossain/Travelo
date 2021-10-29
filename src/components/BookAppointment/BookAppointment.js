import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
const BookAppointment = () => {
  return (
    <div className="container mt-5">
      <h2 className="mt-5  section-heading">Book an Appointment</h2>
      <div className="heading-underline"></div>

      <iframe
        title="map"
        style={{ border: "0", width: "100%", height: "350px" }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div className="container text-start ">
        <div className="row mt-4 align-items-center">
          <div
            className="col-lg-4 text-white d-flex flex-column justify-content-center p-md-5 p-3 mb-4"
            style={{ backgroundColor: "#00aeff" }}
          >
            <div>
              <h5 className="fw-bold">Address</h5>
              <p className="fw-light">
                28 Runkin Street, Chittagong, 1123 Bangladesh
              </p>
            </div>
            <div>
              <h5 className="fw-bold">Phone</h5>
              <p className="fw-light">+88 01114-225122</p>
            </div>

            <div>
              <h5 className="fw-bold">Fax</h5>
              <p className="fw-light">+84.2252.2250.125</p>
            </div>
            <div>
              <h5 className="fw-bold">Email</h5>
              <p className="fw-light">info.dental.depot@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
