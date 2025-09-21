import React from 'react';
import './AboutMe.css';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


import profileImage from '../assets/pic2.jpg';

const AboutMe = () => {
    
  return (
    <section id="about" className="about-section">
       <button
  className="vibrate-3 animated-button" style={{ fontWeight: 1000, fontSize: '16px' }}
  onClick={() => window.open('https://drive.google.com/file/d/1z2Xi6HJ71N_rpQbHYjADZal9DDb33E_P/view?usp=sharing', '_blank')}
>
<FiDownload style={{ marginRight: '9px'}} />
RESUME
</button>



      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Your Name" />
        </div>
        <div className="about-text">
          <h2 className="text-flicker-out-glow">hi, i'm Beas Jana</h2>
          <br></br>
          <a href="https://github.com/bwbeas" target="_blank" rel="noopener noreferrer">
    <FaGithub size={28} />
  </a>
  <a href="https://www.linkedin.com/in/beas-jana/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={28} />
  </a>
  <a href="mailto:bellbuuuwork6@gmail.com" target="_blank" rel="noopener noreferrer">
    <MdEmail size={28} />
  </a>
          <p>
            i'm an undergraduate student pursuing B.Tech. i love creating, solving problems, writing and speaking. 
            <ul>
              <li>☘️i like Data Structures and Algorithms and am specialised in C++.
                <a href="https://leetcode.com/u/bwbeas/" target="_blank" rel="noopener noreferrer" 
                > 🪼 my LeetCode</a>
              </li>
              <li>☘️i do web development in my free time. i prefer to go for frontend roles in ReactJs.</li>
              <li>☘️beginner in Machine Learning. currently learning more about Image Classification Models.</li>
              <li>🎤 i'm an avid debater and public speaker on social topics. during my school years, 
                i've been recognised and awarded in several schools across West Bengal.</li>
              <li>🏅 i'm passionate about Model United Nations, where i love advocating for women's rights. 
                  my contributions have been verbally acknowledged and appreciated by chairs at national-level MUNs.</li>
            </ul>
            </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
