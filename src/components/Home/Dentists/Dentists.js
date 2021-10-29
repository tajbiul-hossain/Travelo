import React, { useEffect, useState } from "react";
import Dentist from "../Dentist/Dentist";

const Dentists = () => {
  const [dentists, setDentists] = useState([]);

  //fetch fake data from public folder
  useEffect(() => {
    fetch("./dentists.json")
      .then((res) => res.json())
      .then((data) => setDentists(data));
  }, []);

  return (
    <div id="dentists" className="container pt-4">
      <h2 className="mt-5 font-link section-heading">Our Dentists</h2>
      <div className="heading-underline"></div>
      <div className="row">
        {dentists.map((dentist) => (
          <Dentist key={dentist.id} dentist={dentist}></Dentist>
        ))}
      </div>
    </div>
  );
};

export default Dentists;
