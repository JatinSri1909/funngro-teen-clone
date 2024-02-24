// src/components/Funblogs.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './FunBlogs.css';

const FunBlogs = () => {
  const cardData = [
    {
      image: 'https://assets-global.website-files.com/63902f19aa174ec491ff894d/6399d5eca3f4b874839ce881_Investing%20for%20Beginners-p-500.png',
      title: 'Investing for Beginners',
      linkText: 'Read More →',
      theme: {
        primaryColor: '#4A86E8',
        secondaryColor: '#4A00E0',
      },
    },
    {
      image: 'https://assets-global.website-files.com/63902f19aa174ec491ff894d/6399d669fdc4fb0390d15e7c_What%20are%20Student%20Loans%3F.png',
      title: 'What are Student Loans?',
      linkText: 'Read More →',
      theme: {
        primaryColor: '#4A86E8',
        secondaryColor: '#FFFFFF',
      },
    },
    {
      image: 'https://assets-global.website-files.com/63902f19aa174ec491ff894d/6399d1aec0495c351829bd8f_62823dbc2a24d79daec18bce_Screenshot%202022-05-16%20at%205.33.47%20PM-p-500.png',
      title: '7 Reasons Why Teens Should Start Earning Money',
      linkText: 'Read More →',
      theme: {
        primaryColor: '#4A86E8',
        secondaryColor: '#D9D9D9',
      },
    },
  ];

  return (
    <div className="fun-blogs">
      <h2>Fun blogs</h2>
      <p>An investment in knowledge pays the best interest, read on.</p>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} className="mb-3 card-with-image">
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Card.Text className={`read-more-text`} style={{ color: card.theme.primaryColor }}>
                {card.linkText}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FunBlogs;