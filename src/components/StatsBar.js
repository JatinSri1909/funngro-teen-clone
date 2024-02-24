import React from 'react';
import './StatsBar.css';
import comp from '../materials/comp.png'; // replace with your actual file paths
import cat from '../materials/cat.png';
import Teenlancers from '../materials/Teenlancers.png';
import pro from '../materials/pro.png';

const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="stats-container">
        <img src={comp} alt="" />
        <p><h1>3000+</h1>Companies</p>
        <img src={cat} alt="" />
        <p><h1>12</h1>Categories</p>
        <img src={Teenlancers} alt="" />
        <p><h1>14,00,000+</h1>Teenlancers</p>
        <img src={pro} alt="" />
        <p><h1>1,000+</h1>Live projects</p>
      </div>
    </section>
  );
};

export default StatsBar;