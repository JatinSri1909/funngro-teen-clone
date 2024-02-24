import React from 'react';
import './Step.css';
const EarnWithFunngro = () => {
  const steps = [
    { title: 'Register', description: 'Register for Earning on Funngro app, select your area of Interest' },
    { title: 'Complete Profile', description: 'Add details about your Interest , Experience and Past work' },
    { title: 'Finish First Project', description: 'Complete one project to show your skils, get paid' },
    { title: 'Apply to Companies', description: 'Hundreds of companies waiting for you, start Applying' },
    { title: 'Start Earning', description: 'Complete the project - earn money & get certified' },
  ];

  return (
    <div className="container-8">
      <div className="c8main">
        <h1>Earn With Funngro</h1>
        <p>Simple steps to earn income by working on projects with real companies.</p>
      </div>
      <div className="c8cards">
        {steps.map((step, index) => (
          <div key={index} className="c8c">
            <div className="c8cdiv1">
              <h1>{index + 1}</h1>
            </div>
            <div className="c8cdiv2">
              <div className="c8csub1">
                <h4>{step.title}</h4>
              </div>
              <div className="c8csub2">
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarnWithFunngro;