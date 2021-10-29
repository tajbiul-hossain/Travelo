import React from "react";
import { Card, Col } from "react-bootstrap";
import "./News.css";
const News = ({ news }) => {
  const { name, shortDesc, img } = news;
  return (
    <div className="news pb-3 font-link">
      <Col className="text-start">
        <Card>
          <Card.Img variant="top" src={img} style={{ width: "100%" }} />
          <Card.Body>
            <Card.Title className="mb-3">{name}</Card.Title>
            <Card.Text>{shortDesc}</Card.Text>
            <div className="d-flex news-comment">
              <div className="d-flex align-items-center me-3">
                <i className="far fa-clock"></i>
                <p className="ms-2 mb-0">28 Sep 2020</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="far fa-comments"></i>
                <p className="ms-2 mb-0">3 Comments</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default News;
