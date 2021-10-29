import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, shortDesc, img } = service;
  return (
    <div className="service pb-3 font-link">
      <img src={img} alt="" />
      <h5 className="service-name font-link">{name}</h5>
      <p className="service-desc px-3">{shortDesc}</p>
      <div>
        <h5 className="service-price">Price: ${price}</h5>
        <Link to={`/details/${id}`}>
          <button className="btn default-btn">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
