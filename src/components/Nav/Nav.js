import React from 'react';
import './Nav.css';

const Nav = () => {

    return (
        <header className="s-header">
            <div className="header-logo">
                {/* <a className="site-logo" href="#"><img src="images/logo.png" alt="Homepage"></a>*/}
                {/* <a className="site-logo" href="#"><img src="images/white.png" alt="Homepage" /></a> */}
                <img 
                    className="site-logo" 
                    src="/IMGs/white.png" 
                    alt="Homepage" 
                    onClick={() => window.location.replace("/#")}
                />
            </div>
            <nav className="header-nav-wrap"> {/*<!-- see ssMobileMenu in main.js -->*/}
                <ul className="header-nav">  {/*<!-- see ssWaypoints in main.js -->*/}
                    <li className="current"><a className="smoothscroll"  href="#home" title="home">Home</a></li>
                    <li><a className="smoothscroll"  href="#about" title="about">About</a></li>
                    <li><a className="smoothscroll"  href="#XP" title="Experience">Experience</a></li>
                    <li><a className="smoothscroll"  href="#Testimonials2" title="Testimonials">Testimonials</a></li>
                    {/* <!--<li><a className="smoothscroll"  href="#Projects" title="Projects">Projects</a></li>--> */}
                    <li><a className="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                </ul>
            </nav>
            <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
        </header>
    )
}

export default Nav;
