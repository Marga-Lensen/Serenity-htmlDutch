import React from 'react';
import { NavLink } from 'react-router-dom';

import flagDutch from '../assets/images/flag-netherlands.svg';
import flagEnglish from '../assets/images/flag-usa.svg';
import flagGerman from '../assets/images/flag-germany.svg';

// import ThemeToggle from './ThemeToggle';
import './Header.scss';

const Header = () => {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/" className="nav-link" title="English">
          <img src={flagEnglish} alt="English" />
        </NavLink>
        <NavLink to="/dutch" className="nav-link" title="Nederlands">
          <img src={flagDutch} alt="Nederlands" />
        </NavLink>
        <NavLink to="/german" className="nav-link" title="Deutsch">
          <img src={flagGerman} alt="Deutsch" />
        </NavLink>
      </nav>
      {/* <ThemeToggle ThemeToggle={ThemeToggle}/> */}
    </header>
  );
};

export default Header;

