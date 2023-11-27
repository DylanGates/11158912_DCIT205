import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-content1">
        <div className="footer-section">
          <h4>Academics</h4>
          <ul>
            <li>
              <a href="undergraduate.html">Undergraduate Courses</a>
            </li>
            <li>
              <a href="graduateMPhil.html">Graduate Courses (MPhil Computer Science)</a>
            </li>
            <li>
              <a href="graduateMSc.html">Graduate Courses (PhD)</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;