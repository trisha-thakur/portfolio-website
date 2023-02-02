import Navbarr from './Navbar';
import Home from './Home';
import AboutMe from './aboutMe';
function App() {
  return (
    <div className="App">
      <Navbarr/>
      <div className='content'>
        <Home/>
      </div>
      <div className='aboutme'>
        <AboutMe/>
      </div>
    </div>
    
  );
}

export default App;
