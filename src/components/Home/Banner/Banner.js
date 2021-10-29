import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Carousel id="home">
        <Carousel.Item className="bg-gradient-overlay">
          <img
            className="d-block carousel-image"
            src="https://github.com/tajbiul-hossain/dental-depot-images/blob/main/images/banner/banner1.jpg?raw=true"
            alt="First slide"
          />
          <Carousel.Caption className="caption font-link">
            <h3 className="carousel-title">
              Welcome to <span style={{ color: "#00aeef" }}>Dental Depot</span>
            </h3>
            <p className="carousel-text">
              Contact us to find out what we have to offer you.
            </p>
            <button className="btn default-btn me-md-3">Get Started</button>
            <button className="btn default-btn">Contact Us</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-gradient-overlay">
          <img
            className="d-block carousel-image"
            src="https://github.com/tajbiul-hossain/dental-depot-images/blob/main/images/banner/banner2.jpg?raw=true"
            alt="Second slide"
          />

          <Carousel.Caption className="caption font-link">
            <h3 className="carousel-title">Meet your new dentist</h3>
            <p className="carousel-text">
              We've created an innovative environment where art, culture, music
              and community meet a passionate and visionary dentist.
            </p>
            <button className="btn default-btn">Meet Dr. Michale</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-gradient-overlay">
          <img
            className="d-block carousel-image"
            src="https://github.com/tajbiul-hossain/dental-depot-images/blob/main/images/banner/banner3.jpg?raw=true"
            alt="Third slide"
          />

          <Carousel.Caption className="caption font-link">
            <h3 className="carousel-title">
              Providing Everyone With Easy Access To Great Dental Care
            </h3>
            <p className="carousel-text">
              Welcome to a place where patients of all ages enjoy a wide range
              of personalized dental solutions.
            </p>
            <button className="btn default-btn">See our services</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
