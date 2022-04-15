import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./News.css";

function News({ setSiteTitle }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    setSiteTitle("Actualités");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/news`)
      .then((res) => setNews(res.data))
      .catch((err) => {
        alert(
          "Une erreur est survenue lors de la récupération de votre actualité"
        );
      });
  }, []);

  return (
    <div className="container-global-news">
      {news?.map((news) => (
        <div className="wrapper-news">
          <div className="page-news">
            <div className="news">
              <h1 className="title-news">{news.title}</h1>
              <div className="container-news">
                <div className="wrapper-illustration-news">
                  <img src={news.src} alt={news.src} />
                  <img
                    className="illustration-news"
                    src={news.link}
                    alt={news.link}
                  />
                </div>
                <div className="datetime-created-news">
                  Actualité datant du :{" "}
                  {moment(news.created_at).format("DD/MM/YYYY à HH:mm")}{" "}
                </div>
                <p>{news.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
