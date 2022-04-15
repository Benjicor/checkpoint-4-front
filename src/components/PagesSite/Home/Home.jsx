import React, { useEffect } from "react";

import wally from "../../../assets/png/wally.png";

import "./Home.css";

function Home({ setSiteTitle }) {
  useEffect(() => {
    setSiteTitle("Accueil");
  }, []);

  return (
    <div className="container-global-home">
      <div className="wrapper-home">
        <div className="page-home">
          <div className="home">
            <h1 className="title-home">La Voile et les Voiliers</h1>
            <div className="container-home">
              <div className="wrapper-illustration-home">
                <img
                  className="illustration-home"
                  src={wally}
                  alt="Voiliers Wally"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <ul className="list">
            <li>Actualités</li>
            <li>Articles</li>
            <li>Événements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
