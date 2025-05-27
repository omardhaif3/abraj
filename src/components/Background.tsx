// components/Background.jsx
import React from 'react';
import './Background.css'; // CSS file for wave styles

const Background = () => {
  return (
    <div className="wave-container">
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />
    </div>
  );
};

export default Background;
