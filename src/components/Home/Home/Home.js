import React from "react";
import Banner from "../Banner/Banner";
import Dentists from "../Dentists/Dentists";
import LatestNews from "../LatestNews/LatestNews";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Dentists></Dentists>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
