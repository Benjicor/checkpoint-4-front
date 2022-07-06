import React, { useState } from 'react';

import BurgerContent from './BurgerContent';

import './BurgerMenu.css';

function BurgerMenu({ siteTitle }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className={`header ${open ? 'is-open' : ''}  `}>
      <div className="container-btn">
        <button type="button" onClick={handleClick} className="burger-menu">
          <span />
          <span />
          <span />
          {open ? <BurgerContent handleClick={handleClick} /> : null}
        </button>
      </div>
      <div className="title-burger-menu">{siteTitle}</div>
    </header>
  );
}

export default BurgerMenu;
