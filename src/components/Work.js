// Work.js
import React from 'react';
import './Work.css';
import money from '../materials/money.png';
import passion from '../materials/passion.png';
import learn from '../materials/learn.png';
import cert from '../materials/cert.png';
import SOCIALNET from '../materials/SOCIALNET.png';
import vde from '../materials/vde.png';
import webd from '../materials/webd.png';
import inf from '../materials/inf.png';
import mob from '../materials/mob.png';
import campus from '../materials/campus.png';
import research from '../materials/research.png';
import voice from '../materials/voice.png';
import cntwrt from '../materials/cntwrt.png';
import graphic from '../materials/graphic.png';

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
  <div className='category-container'>
      <div className="box">
        <div className="box-content">
          <div className="box-front">
            <img src={SOCIALNET} alt="" />
            <h1 className="social">Social Media Marketing</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Manage social media pages of companies</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={vde} alt="" />
            <h1 className="vdo">Video Creation</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Create and edit videos for companies and use your video creation skills</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={webd} alt="" />
            <h1 className="web">Website Design</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Design and build a website for companies</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={inf} alt="" />
            <h1 className="inf">Influencer Marketing</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Create Reels, Memes, posts and videos for social media handles of companies</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={mob} alt="" />
            <h1 className="mob">Mobile App Development</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Develop market ready apps for companies</p>
          </div>
        </div>
      </div>

      <div className="box1">
        <div className="box-content1">
          <div className="box-front1">
            <img src={campus} alt="" />
            <h1 className="social">Campus Ambassador</h1>
          </div>
          <div className="box-back1">
            <p className="back-cont1">Drive sales for companies by acquiring customers</p>
          </div>
        </div>

        <div className="pro-cat">
          <div className="front">
            <img src="#" alt="" />
            <h1 className="cath">Project Categories</h1>
            <p className="catp">Hundreds of live project in each category. Register for categories of your choice in Funngro App and start working with companies.</p>
          </div>
        </div>

        <div className="box-content1">
          <div className="box-front1">
            <img src={research} alt="" />
            <h1 className="mob">Research and Survey</h1>
          </div>
          <div className="box-back1">
            <p className="back-cont1">Run Surveys for companies and complete research assignments</p>
          </div>
        </div>
      </div>

      <div className="box2">
        <div className="box-content">
          <div className="box-front">
            <img src={research} alt="" />
            <h1 className="social">Data Entry</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Create databases for companies with your data research skills</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={voice} alt="" />
            <h1 className="vdo2">Voice Over</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Work with companies in recording content with your voice over skills</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={cntwrt} alt="" />
            <h1 className="web">Content Writing</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Blogs, articles, website content and a lot more. Write for companies</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={graphic} alt="" />
            <h1 className="inf2">Graphic Design</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Logos, Brochures, pamphlets, website, posts etc</p>
          </div>
        </div>

        <div className="box-content">
          <div className="box-front">
            <img src={mob} alt="" />
            <h1 className="mob2">Testing</h1>
          </div>
          <div className="box-back">
            <p className="back-cont">Test company products and give feedback, app, website, physical product</p>
          </div>
        </div>
      </div>
    </div>
  <div className="clearfix"></div>
</div> 
  );
};

export default Work;