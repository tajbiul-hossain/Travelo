import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="bg-overlay" interval={3000}>
          <img
            className="d-block carousel-image"
            src="https://i.ibb.co/BZ3wjD1/banner1.webp"
            alt="banner1"
          />
          <Carousel.Caption className="caption ">
            <h3 className="carousel-title">Switzerland</h3>
            <p className="carousel-text mt-5">
              Switzerland is a mountainous Central European country, home to
              numerous lakes, villages and the high peaks of the Alps
            </p>
            <button className="btn default-btn me-md-3">Explore now</button>
            <button className="btn default-btn">Contact Us</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-overlay" interval={3000}>
          <img
            className="d-block carousel-image"
            src="https://i.ibb.co/dcwSY6h/banner2.webp"
            alt="banner2"
          />

          <Carousel.Caption className="caption ">
            <h3 className="carousel-title">Maldives</h3>
            <p className="carousel-text mt-5">
              With dozens of resort islands, the Maldives relies on tourism as
              its dominant industry that draws on a large portion of the
              workforce.
            </p>
            <button className="btn default-btn">Explore now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-overlay" interval={3000}>
          <img
            className="d-block carousel-image"
            src="https://i.ibb.co/6NqYPvK/banner3.webp"
            alt="banner3"
          />

          <Carousel.Caption className="caption ">
            <h3 className="carousel-title">Australia</h3>
            <p className="carousel-text mt-5">
              Australia, is a sovereign country comprising the mainland of the
              Australian continent, the island of Tasmania, and numerous smaller
              islands.
            </p>
            <button className="btn default-btn">Explore now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
