import React from 'react';

import VoilesEtVoiliersMagazine from '../../assets/png/voilesEtVoiliersMagazine.png';
import VoilesEtVoiliersYouTube from '../../assets/png/voilesEtVoiliersYouTube.png';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="logo-cliquable">
        <a
          className="magazine"
          href="https://voilesetvoiliers.ouest-france.fr"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={VoilesEtVoiliersMagazine}
            alt="Logo Voiles et Voiliers Magazine"
            width="100%"
          />
        </a>
        <a
          className="youtube"
          href="https://www.youtube.com/user/voilesetvoiliers"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={VoilesEtVoiliersYouTube}
            alt="Logo Voiles et Voiliers YouTube"
            width="100%"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
