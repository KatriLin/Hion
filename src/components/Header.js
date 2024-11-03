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
    console.log('aukii');
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
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      {/* Hamburger-menu */}
      {menuOpen && (
        <div className={`dropdown-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="overlay-menu">
            <li>
              <Link className="hamburgerlinks" to="/" onClick={toggleMenu}>
                Etusivu
              </Link>
            </li>
            <li>
              <Link
                className="hamburgerlinks"
                to="/workexperience"
                onClick={toggleMenu}
              >
                Työkokemus
              </Link>
            </li>
            <li>
              <Link className="hamburgerlinks" to="/about" onClick={toggleMenu}>
                Minusta
              </Link>
            </li>
            <li>
              <Link
                className="hamburgerlinks"
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
