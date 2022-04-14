import React from 'react';
import { Link } from 'react-router-dom';

import './BurgerContent.css';

function BurgerContent({ handleClick }) {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link className="link" to="/" onClick={handleClick}>
            Accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/News" onClick={handleClick}>
            Actualités
          </Link>
        </li>
        <li>
          <Link className="link" to="/Articles" onClick={handleClick}>
            Articles
          </Link>
        </li>
        <li>
          <Link className="link" to="/Events" onClick={handleClick}>
            Événements
          </Link>
        </li>
        <li>
          <Link className="link" to="/Contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/Dashboard/News" onClick={handleClick}>
            Administration Actualités
          </Link>
        </li>
        <li>
          <Link className="link" to="/Dashboard/Articles" onClick={handleClick}>
            Administration Articles
          </Link>
        </li>
        <li>
          <Link className="link" to="/Dashboard/Events" onClick={handleClick}>
            Administration Événements
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;
