const Navbarr = () => {
    return (  
        <nav className="navbar">
            <h1 className="navlogo">Trisha.</h1>
            <a href="/" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            </a>
            <div className="links">
                <a href="/Home">Home</a>
                <a href="/AboutMe">About Me</a>
                <a href="/Experience">Experience</a>
                <a href="/Projects">Projects</a>
               
            </div>
        </nav>)};
 
export default Navbarr;