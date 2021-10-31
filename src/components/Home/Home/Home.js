import React from "react";
import Banner from "../Banner/Banner";
import WeProvide from "../Provide/WeProvide";
import RecentTrips from "../RecentTrips/RecentTrips";
import Packages from "../Packages/Packages";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Packages></Packages>
      <WeProvide></WeProvide>
      <RecentTrips></RecentTrips>
    </div>
  );
};

export default Home;
