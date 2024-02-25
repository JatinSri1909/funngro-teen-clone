import React from 'react';
import './StatsBar.css';
import comp from '../materials/comp.png'; // replace with your actual file paths
import cat from '../materials/cat.png';
import Teenlancers from '../materials/Teenlancers.png';
import pro from '../materials/pro.png';

const StatsBar = () => {
  return (
    <div className="stats-bar">
      <div className="stats-item">
        <img src={comp} alt="" />
        <h1>3000+</h1>
        <p>Companies</p>
      </div>
      <div className="stats-item">
        <img src={cat} alt="" />
        <h1>12</h1>
        <p>Categories</p>
      </div>
      <div className="stats-item">
        <img src={Teenlancers} alt="" />
        <h1>14,00,000+</h1>
        <p>Teenlancers</p>
      </div>
      <div className="stats-item">
        <img src={pro} alt="" />
        <h1>1,000+</h1>
        <p>Live projects</p>
      </div>
    </div>
  );
};

export default StatsBar;