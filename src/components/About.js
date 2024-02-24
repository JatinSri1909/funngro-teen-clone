import React from 'react';
import './About.css';
import linkedin from '../materials/linkedin.png'; // import the LinkedIn logo

const About = () => {
  return (
    <section className="about">
        <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro.png" alt="About Us" />
      <div className="about-content">
      <h1>The name says it all.</h1>
<h1>"Its <span className="highlight">Fun</span> to <span className="highlight">Grow</span>"</h1>
        <br />
        <p>
          Funngro is built by educators, Tech enthusiasts, IIM alumni, Finance experts but
          most importantly by Loving parents. We are thankful to those mentors who helped
          us in early stage of our lives and Funngro is our effort to give back to the society.
          Funngro is a mission to enable Teenagers to become Financially empowered and
          grow up to be responsible citizens.
        </p>
        <p>
          Mission - Enable Smart Teenagers and Smart Companies to realize their full
          potentials
        </p>
        <p>
          Payal Jain, CEO    <img src={linkedin} alt="LinkedIn" className="linkedin-logo" /> <br />
          Anik Jain, CGO     <img src={linkedin} alt="LinkedIn" className="linkedin-logo" />
        </p>
        <p>BE INDEPENDENT BEFORE 18!</p>
        <p>Welcome to Funngro. We are happy to help.</p>
      </div>
    </section>
  );
};

export default About;