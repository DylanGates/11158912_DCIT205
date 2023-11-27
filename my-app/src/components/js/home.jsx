import React from 'react';
import './index.css';

export const Label = () => {
  return (
    <div className="label">
      <div className="text-wrapper">Courses</div>
      <div className="text-wrapper">Lecturers</div>
      <div className="text-wrapper">About Us</div>
    </div>

  );
};

export const Image = () => {
  return (
    <div className="image">
      <img className="element" alt="Element" src="4286999-1.png" />
    </div>
  );
};