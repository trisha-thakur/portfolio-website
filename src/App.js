import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <AboutMe />
    </div>
    
  );
}

export default App;
