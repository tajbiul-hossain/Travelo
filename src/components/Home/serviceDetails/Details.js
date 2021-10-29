import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";

const Details = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();
  const { name, details, price, img } = service;
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        for (const singleService of data) {
          if (singleService.id === serviceId) {
            setService(singleService);
          }
        }
      });
  }, []);
  return (
    <div className="container">
      <div className="row mt-5 align-items-center">
        <div className="col-12 col-lg-6">
          <img className="service-image" src={img} alt="" />
        </div>
        <div className="col-12 col-lg-6 p-3 text-start">
          <h2 className="mb-3">{name}</h2>
          <h2 className="service-price detailed-price">Cost: ${price}</h2>
          <p className="service-desc fw-normal">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
