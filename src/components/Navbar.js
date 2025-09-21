import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">beas</Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="#about">about me</a> 
          </li>
          <li>
            <Link to="/projects">projects</Link> 
          </li>
          <li>
            <a
              href="https://bea1.vercel.app/blog-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <li>
            <Link to="/others">what else?</Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
