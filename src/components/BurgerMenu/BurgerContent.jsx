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
          <Link className="link" to="/news" onClick={handleClick}>
            Actualités
          </Link>
        </li>
        <li>
          <Link className="link" to="/articles" onClick={handleClick}>
            Articles
          </Link>
        </li>
        <li>
          <Link className="link" to="/events" onClick={handleClick}>
            Événements
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/dashboard/news" onClick={handleClick}>
            Administration Actualités
          </Link>
        </li>
        <li>
          <Link className="link" to="/dashboard/articles" onClick={handleClick}>
            Administration Articles
          </Link>
        </li>
        <li>
          <Link className="link" to="/dashboard/events" onClick={handleClick}>
            Administration Événements
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;
