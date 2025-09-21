import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar'; 
import Fireflies from './components/Fireflies'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Fireflies />
      <AboutMe />
      
    </div>
  );
}

export default App;
