import React from "react";
import "./Dentist.css";
const Dentist = ({ dentist }) => {
  const { name, img, expertise } = dentist;
  return (
    <div className="col-12 col-lg-4 text-center">
      <figure className="dentist-card ">
        <img alt="" src={img} />
        <figcaption>
          <h3>{name}</h3>
          <p>{expertise}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Dentist;
