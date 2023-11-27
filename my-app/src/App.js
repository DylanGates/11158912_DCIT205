import React from 'react';
import './style.css';
import Header from './Header.jsx';
import buildingImage from './building.png';
import Footer from './Footer1.jsx';
import './Footer.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="header">
        <h1>Welcome!</h1>
      </div>

      <div className="container">
      <div class="card">
                <h2>Undergraduate Programmes</h2>
                <p>Explore our wide range of undergraduate programs in computer science.</p>
                <a href="undergraduate.html"><b class="read-more">Read More</b></a>
            </div>
    
            <div class="card">
                <h2>MPhil and MSc programmes</h2>
                <p>Learn about our MPhil and MSc programs that offer in-depth research opportunities.</p>
                <a href="MPhil.html"><b class="read-more">Read More</b></a>
            </div>
    
            <div class="card">
                <h2>Short Courses</h2>
                <p>Discover our short courses designed to enhance specific skills in computer science.</p>
                <a href="Short.html"><b class="read-more">Read More</b></a>
            </div>
    
            <div class="card">
                <h2>PhD programmes</h2>
                <p>Explore our PhD programs and pursue advanced research in computer science.</p>
                <a href="PhD.html"><b class="read-more">Read More</b></a>
            </div>
      </div>

      <img src={buildingImage} alt="Computer Science Building" />

      <Footer />
      
    </div>
  );
};

export default App;