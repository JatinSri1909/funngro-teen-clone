import React, { useState } from "react";
import './FAQs.css';

const FAQs = () => {
  const [expanded, setExpanded] = useState(new Set());

  const toggle = (id) => {
    const newSet = new Set(expanded);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpanded(newSet);
  };

  const answers = [
    <ol>
      <li>Download funngro and register for earning</li>
      <li>Complete your evaluation project</li>
      <li>Apply to projects of your interest</li>
      <li>Submit completed projects</li>
      <li>Get paid!</li>
    </ol>,
    'Start early, get independence, learn while you earn but most importantly get real world experience. Work on projects of your interest and find your real passion before making the final career decision.',
    'At this time we have 12 categories in which Teens can work as listed on our home page. Do let us know if those do not cover your needs.'
  ];

  return (
    <div className="faqs-container">
        <h2>Frequently Asked Questions</h2>
        <br />
        <p>Part of being successful is asking the right questions and listening to the answers.</p>
        <br />
        <br />
      {['How can I start earning money?', 'Why should Teens work?', 'What kind of work can I do?'].map((question, index) => (
        <div className="faq-item" key={index}>
          <button className={`toggle-btn ${expanded.has(index) ? "expanded" : ""}`} onClick={() => toggle(index)}>
            +
          </button>
          <h3 className="faq-question">{question}</h3>
          {expanded.has(index) && (
            <div className="faq-answer">
              {answers[index]}
            </div>
          )}
        </div>
      ))}
      <div className="more-faqs">
        <p>For more FAQs, check out our <a href="#">FAQ page</a>.</p>
        <br />
        <button className="btn">View FAQs</button>
      </div>
    </div>
  );
};

export default FAQs;