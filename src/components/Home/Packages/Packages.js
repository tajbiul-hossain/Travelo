import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://sleepy-springs-60612.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
      </div>
    );

  return (
    <div id="services" className="container pt-4">
      <h2 className="mt-5  section-heading">Popular Packages</h2>
      <div className="heading-underline"></div>
      <div className="service-container">
        {packages.map((service) => (
          <Package key={service._id} service={service}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
