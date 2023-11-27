import React from 'react';
import './components/css/style.css';
import Header from './componenets/js/Header1.jsx';
import buildingImage from './images/building.png';
import Footer from './components/js/Footer1.jsx';
import './componenets/css/Footer.css';

const App = () => {
  return (
    <div>
      <Header />

      <div className="header">
        <h1>Welcome!</h1>
      </div>

      <div className="building">
        <img className="building-image" src={buildingImage} width="300px" height="300px" alt="Building" />
      </div>

      <Footer />
      <footer className="footer-area">
        <div className="footer-content">
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
    </div>
  );
};

export default App;



