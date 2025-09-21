import './App.css';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Fireflies from './components/Fireflies'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Fireflies />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
