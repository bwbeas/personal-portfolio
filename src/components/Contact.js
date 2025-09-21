import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
function Contact() {
  return (
    <div className="contact-icons">
      <h2 className="section-title text-pop-up-top" style={{ marginTop: '3rem' }}>find me at:</h2>
      <div className="social-icons">
        <a href="https://github.com/bwbeas" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />  bwbeas
        </a> <br></br><br></br>
        <a href="https://linkedin.com/in/beas-jana/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />  beas jana
        </a><br></br> <br></br>
        <a href="mailto:bellbuuuwork6@example.com">
          <MdEmail size={20} />  bellbuuuwork6@gmail.com
        </a><br></br><br></br>
      </div>
    </div>
  );
}

export default Contact;
