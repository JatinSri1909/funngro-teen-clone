// Work.js
import React from 'react';
import './Work.css';
import money from '../materials/money.png';
import passion from '../materials/passion.png';
import learn from '../materials/learn.png';
import cert from '../materials/cert.png';


const Work = () => {
  const cardData = [
    { img: money, title: 'First income', description: 'Work with real companies and Earn money.' },
    { img: passion, title: 'Passion', description: 'Make your passion as your profession.' },
    { img: learn, title: 'Learning', description: 'Experiential Learning by working on real projects' },
    { img: cert, title: 'Certificate', description: 'Build your profile by getting experience certificates' },
  ];

  return (
    <div className="work-container">
        <h1>Why work in your Teens ?</h1>
        <p className="answer">Warren Buffet, Bill Gates and Steve Jobs, all started working in their teens, do you need any better reason ?</p>
        <br />
        <br />
        <div className='card-container'>
  {cardData.map((card, index) => (
    <div key={index} className="work-card">
      <div className="work-card-content">
        <img src={card.img} alt="" className={card.title.toLowerCase().replace(' ', '')} />
        <h2>{card.title}</h2>
        <p className='description'>{card.description}</p>
      </div>
    </div>
  ))}
</div>
  
  <div className="clearfix"></div>
</div> 
  );
};

export default Work;