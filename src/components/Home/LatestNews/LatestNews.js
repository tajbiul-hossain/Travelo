import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import News from "../News/News";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div id="news" className="container pt-4">
      <h2 className="mt-5 font-link section-heading">Latest News</h2>
      <div className="heading-underline"></div>
      <div className="news-container">
        <Row xs={1} md={2} lg={3} className="g-4">
          {news.map((news) => (
            <News key={news.id} news={news}></News>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default LatestNews;
