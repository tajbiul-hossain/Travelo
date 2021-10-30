import React from "react";
import Banner from "../Banner/Banner";
import WeProvide from "../Provide/WeProvide";
import RecentTrips from "../RecentTrips/RecentTrips";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <WeProvide></WeProvide>
      <RecentTrips></RecentTrips>
    </div>
  );
};

export default Home;
