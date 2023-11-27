import React from 'react';
import comScienceLogo from './comScience_logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <a href="home.html">
          <img className="comscience-logo" src={comScienceLogo} width="300px" height="50px" alt="Computer Science Department Logo" />
        </a>
        <nav className="header-nav">
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="faculty.html">Faculty</a></li>
            <li><a href="research.html">Research</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;