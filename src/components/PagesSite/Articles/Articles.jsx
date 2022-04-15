import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./Articles.css";

function Articles({ setSiteTitle }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setSiteTitle("Articles");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/articles`)
      .then((res) => setArticles(res.data))
      .catch((err) => {
        alert(
          "Une erreur est survenue lors de la récupération de votre actualité"
        );
      });
  }, []);

  return (
    <div className="container-global-articles">
      {articles?.map((articles) => (
        <div className="wrapper-articles">
          <div className="page-articles">
            <div className="title-articles">
              <h1 className="articles">{articles.title}</h1>
              <div className="container-articles">
                <div className="wrapper-illustration-articles">
                  <img src={articles.src} alt={articles.src} />
                  <img
                    className="illustration-articles"
                    src={articles.link}
                    alt={articles.link}
                  />
                </div>
                <div className="datetime-created-articles">
                  Article datant du :{" "}
                  {moment(articles.created_at).format("DD/MM/YYYY à HH:mm")}{" "}
                </div>
                <p>{articles.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;
