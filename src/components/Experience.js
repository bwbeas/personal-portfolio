import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h1 className="section-title text-pop-up-top">Experience</h1>
      <div className="experience-content">
        <div className="experience-text">
          <h2 className="company-name">Internship Studio</h2>
          <h3 className="role">Frontend Developer Intern</h3>
          <p className="description">
            Designed and developed the frontend of a functional e-commerce website for a flower shop as part of mentored training, using React, HTML, CSS.
          </p>
        </div>
        <div className="experience-date">
          Jul 2024 - Aug 2024
        </div>
      </div>
<br></br> <br></br>
      {/* Education Section */}
      <h1 className="section-title text-pop-up-top" style={{ marginTop: '3rem' }}>Education</h1>
      <div className="experience-content">
        <div className="experience-text">
          <h3 className="role2">VIT Chennai </h3>
          <p className="description">
            pursuing B.Tech in Computer Science Engineering. <br></br>
            CGPA: 9.06/10.0
            </p>
        </div>
        <div className="experience-date">
          2023 - 2027
        </div>
      </div>
      <br></br>
      <div className="experience-content">
        <div className="experience-text">
          <h3 className="role2">Adamas International School</h3>
          <p className="description">
            ICSE graded 99.2% <br></br>
            ISC with Computer Science Stream graded 94.75%
            </p>
        </div>
        <div className="experience-date">
          2005 - 2023
        </div>
      </div>
    </section>
  );
};

export default Experience;
