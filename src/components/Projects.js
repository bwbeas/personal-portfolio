import React from 'react';
import './Projects.css';
import huamemoImg from '../assets/huamemo.png';
import beadoodleImg from '../assets/beadoodle.png';
import imageClassifierImg from '../assets/image-classifier.jpg';

const projectsData = [
  {
    id: 1,
    title: "🦋HUAMEMO🦋",
    description: (
        <>Developed a private, everyday memobook app that allows users worldwide to securely sign up and log in to
create, save, and manage personal notes.<br></br>
<b>•Tools Used: React, Express, MongoDB.</b></>
    ),
    link: "https://github.com/bwbeas/huamemofe",
    imageUrl: huamemoImg,
  },
  {
    id: 2,
    title: "🫧BEADOODLE - A Drawable FilterCam🫧",
    description: (
        <>Built an interactive web application that lets users draw filters or elements on themselves in real time using their
webcam, pose, and download the final image.<br></br>
<b>•Tools Used: React, MediaPipe.</b></>
    ),
    link: "https://github.com/bwbeas/beadoodle",
    imageUrl: beadoodleImg,
  },
  {
    id: 3,
    title: "🍓Fruit Image Classification using CNN in TensorFlow🍓",
    description: (
        <>Developed a deep learning model to classify fruit images into five categories with real-time prediction and
confidence scoring, deployed via Google Colab.<br></br>
   <b>•Tools Used: TensorFlow, Python.</b></>
    ),
    link: "https://github.com/bwbeas/fruits-classification-model",
    imageUrl: imageClassifierImg,
  },
];

const Projects = () => {
  return (
    <div>
        <br></br>
        <h1 className="section-title text-pop-up-top" style={{ marginTop: '3rem' }}>Projects</h1>

        <h3 className="beas">check out github link for my portfolio too: <a href="https://github.com/bwbeas/personal-portfolio" target="_blank" rel="noopener noreferrer"> view project</a></h3>
    <section className="projects-section">
      <div className="projects-list">
        {projectsData.map(({ id, title, description, link, imageUrl }) => (
          <div key={id} className="project-item">
            <img
              src={imageUrl}
              alt={title}
              className="project-image slide-in-fwd-center"
            />
            <div className="project-details">
              <h2>{title}</h2>
              <p>{description}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Projects;
