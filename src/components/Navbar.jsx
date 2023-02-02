const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="navLogo">
                Trisha.
            </div>
            <a href="/" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            </a>
            <ul className="links">
                <a href="/Home">
                    <span className="navSpan">01. </span>
                    Home
                </a>
                <a href="/AboutMe">
                    <span className="navSpan">02. </span>
                    About Me
                </a>
                <a href="/Experience">
                    <span className="navSpan">03. </span>
                    Experience
                </a>
                <a href="/Projects">
                    <span className="navSpan">04. </span>
                    Projects
                </a>
            </ul>
        </nav>
    )
};
 
export default Navbar;