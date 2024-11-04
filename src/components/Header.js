import React, { useState } from 'react';
import hionlogo from '../img/hionlogo.svg';
import hionlogopurple from '../img/hionlogopurple.svg';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`headerwrapper ${isHome ? 'home-background' : ''}`}>
      <nav className="nav">
        <div>
          <img
            height="40px"
            width="150px"
            src={isHome ? hionlogo : hionlogopurple}
            alt="hion Logo"
          />
        </div>
        <ul>
          <li>
            <Link className="mainmenulinks" to="/">
              Etusivu
            </Link>
          </li>
          <li>
            {' '}
            <Link className="mainmenulinks" to="/workexperience">
              Työkokemus
            </Link>
          </li>
          <li>
            <Link className="mainmenulinks" to="/education">
              Koulutus
            </Link>
          </li>
          <li>
            <Link className="mainmenulinks" to="/about">
              Minusta
            </Link>
          </li>
          <li>
            <Link className="mainmenulinks" to="/contact">
              Yhteystiedot
            </Link>
          </li>
        </ul>

        {/* Hamburger-menu */}
        <div
          className={`hamburger ${isHome ? 'home' : ''} ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      {/* Hamburger-menu */}
      {menuOpen && (
        <div className={`dropdown-menu ${isHome ? 'home' : 'other'}`}>
          <ul className="overlay-menu">
            <li>
              <Link
                className={`hamburgerlinks ${isHome ? 'home-link' : 'black-link'}`}
                to="/"
                onClick={toggleMenu}
              >
                Etusivu
              </Link>
            </li>
            <li>
              <Link
                className={`hamburgerlinks ${isHome ? 'home-link' : 'black-link'}`}
                to="/workexperience"
                onClick={toggleMenu}
              >
                Työkokemus
              </Link>
            </li>
            <li>
              <Link
                className={`hamburgerlinks ${isHome ? 'home-link' : 'black-link'}`}
                to="/education"
                onClick={toggleMenu}
              >
                Koulutus
              </Link>
            </li>
            <li>
              <Link
                className={`hamburgerlinks ${isHome ? 'home-link' : 'black-link'}`}
                to="/about"
                onClick={toggleMenu}
              >
                Minusta
              </Link>
            </li>
            <li>
              <Link
                className={`hamburgerlinks ${isHome ? 'home-link' : 'black-link'}`}
                to="/contact"
                onClick={toggleMenu}
              >
                Yhteystiedot
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
