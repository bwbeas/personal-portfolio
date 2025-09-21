import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home" className="brand">beas</a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="#AboutMe">about me</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="https://bea1.vercel.app/blog-tech" target="_blank" rel="noopener noreferrer">blog</a></li>
          <li><a href="#others">what else?</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
