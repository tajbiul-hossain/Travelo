import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, shortDesc, img } = service;

  return (
    <div className="service pb-3">
      <div className="service-img">
        <img src={img} alt="" />
        <h5 className="service-price">${price}</h5>
      </div>
      <div className="service_info">
        <h3>{name}</h3>
        <p>{shortDesc}</p>
        <div className="reviews d-flex justify-content-between mt-3">
          <span className="d-flex justify-content-center align-items-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <p className="ms-1 m-0">(20 Reviews)</p>
          </span>
          <div className="days d-flex justify-content-center align-items-center">
            <i className="fa fa-clock-o"></i>
            <p className="ms-1 m-0">5 Days</p>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/book/${_id}`}>
          <button className="btn default-btn book-btn">book now</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
