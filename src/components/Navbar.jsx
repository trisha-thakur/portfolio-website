import { useState } from "react";
const Navbar = () => {
    const [navbar , setNavbar ] = useState(false);
    const changeBg = () => {
        if (window.scrollY >= 200){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBg);
     
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navLogo">Trisha.</div>
      <a href="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className="links">
        <a href="src/components/Home" className="nav-button">
          <span className="navSpan">01. </span>
          Home
        </a>
        <a href="src/components/AboutMe" className="nav-button">
          <span className="navSpan">02. </span>
          About Me
        </a>
        <a href="src/components/Experience" className="nav-button">
          <span className="navSpan">03. </span>
          Experience
        </a>
        <a href="src/componentsimp/Projects" className="nav-button">
          <span className="navSpan">04. </span>
          Contact me
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
