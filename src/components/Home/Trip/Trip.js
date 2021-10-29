import React from "react";
import { Col } from "react-bootstrap";
import "./Trip.css";
const Trip = (props) => {
  return (
    <Col>
      <div class="trip">
        <div class="trip-img">
          <img src={props.img} alt="" />
        </div>
        <div class="trip-info">
          <div class="trip-date">
            <span>{props.date}</span>
          </div>
          <h3>{props.name}</h3>
        </div>
      </div>
    </Col>
  );
};

export default Trip;
