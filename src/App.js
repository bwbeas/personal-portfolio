import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Fireflies from './components/Fireflies';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects'; 
import Others from './components/Others';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Fireflies />
                <AboutMe />
                <Experience />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/others" element={<Others />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
