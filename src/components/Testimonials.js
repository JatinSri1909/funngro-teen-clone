import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Happy Funngro Members</h2>
      <p>Thousands of your friends are on Funngro and their lives are changing for better. Read on for real stories</p>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63a02c38d532a827f92564c4_Aanya%20Anand.png" alt="Aanya Anand" />
          <p>Aanya Anand</p>
          <p>Social Media marketing</p>
          <p>Experience has helped me gain a lot of confidence. Best part is learning & Earning together</p>
        </div>
        <div className="testimonial">
          <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63a02cb96cc401457e606f65_Shaurya%20Chatterjee.png" alt="Shaurya Chatterjee" />
          <p>Shaurya Chatterjee</p>
          <p>Content Writing</p>
          <p>Proud earning money via the projects. It's a huge motivation</p>
        </div>
        <div className="testimonial">
          <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63a02d4ed532a8800c256e5e_Apoorva%20yagi.png" alt="Apoorva Tyagi" />
          <p>Apoorva Tyagi</p>
          <p>Social Media Marketing</p>
          <p>Funngro is a powerful platform for all the teenagers out there to earn by applying their skills and new ideas. Happy to work with companies.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;