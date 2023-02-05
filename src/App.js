import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ReactSwitch from "react-switch";
import './styles.css';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <div className="App" id = {theme}>
      <Navbar/>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      <Home />
      <AboutMe />
      <Experience/>
      <Footer/>
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
