import React from 'react';
import './Nav.css';

const Nav = () => {

    return (
        <header class="s-header">
            <div class="header-logo">
                {/* <a class="site-logo" href="#"><img src="images/logo.png" alt="Homepage"></a>*/}
                {/* <a class="site-logo" href="#"><img src="images/white.png" alt="Homepage" /></a> */}
                <img 
                    class="site-logo" 
                    src="/IMGs/white.png" 
                    alt="Homepage" 
                    onClick={() => window.location.replace("/#")}
                />
            </div>
            <nav class="header-nav-wrap"> {/*<!-- see ssMobileMenu in main.js -->*/}
                <ul class="header-nav">  {/*<!-- see ssWaypoints in main.js -->*/}
                    <li class="current"><a class="smoothscroll"  href="#home" title="home">Home</a></li>
                    <li><a class="smoothscroll"  href="#about" title="about">About</a></li>
                    <li><a class="smoothscroll"  href="#XP" title="Experience">Experience</a></li>
                    <li><a class="smoothscroll"  href="#Testimonials2" title="Testimonials">Testimonials</a></li>
                    {/* <!--<li><a class="smoothscroll"  href="#Projects" title="Projects">Projects</a></li>--> */}
                    <li><a class="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                </ul>
            </nav>
            <a class="header-menu-toggle" href="#0"><span>Menu</span></a>
        </header>
    )
}

export default Nav;
