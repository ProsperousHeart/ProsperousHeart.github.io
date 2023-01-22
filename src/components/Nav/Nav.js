import React, { useState, useEffect } from 'react';
// import React from 'react';
// import { useEffect } from 'react';
import './Nav.css';
import $ from 'jquery';

function ssMobileMenu(element) {

    // console.log("Clicked on element:", element);

    var toggleButton = $('.header-menu-toggle'),
        nav = $('.header-nav-wrap');

    toggleButton.on('click', function(event){
        event.preventDefault();

        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();
    });

    if (toggleButton.is(':visible')) nav.addClass('mobile');

    // window.on('resize', function() {
    //     if (toggleButton.is(':visible')) nav.addClass('mobile');
    //     else nav.removeClass('mobile');
    // });

    nav.find('a').on("click", function() {

        if (nav.hasClass('mobile')) {
            toggleButton.toggleClass('is-clicked');
            nav.slideToggle(); 
        }
    });

};

// const Nav = () => {
// export default function Nav({scrollDir, loc}) {
export default function Nav({scrollDir}) {
    // const [stickyClass, setStickyClass] = useState('.header-nav li a');
    const [dims, setDims] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    // console.log("Scroll direction is:", scrollDir[0]);
    // console.log("current section:", loc);
    // console.log("current window location:", window.location);

    useEffect(() => {
        function handleResize() {
            var toggleButton = $('.header-menu-toggle'),
                nav = $('.header-nav-wrap');
            setDims({
                height: window.innerHeight,
                width: window.innerWidth
              });
            console.log('resized to: ', dims.width, 'x', dims.height);

            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        }
        window.addEventListener('resize', handleResize)
    });
    // useEffect(() => {
    //     window.addEventListener('scroll', stickNavbar(scrollDir));

    //     return () => {
    //         window.removeEventListener('scroll', stickNavbar(scrollDir));
    //     };
    // }, [scrollDir]);

    // const stickNavbar = ({scrollDir}) => {
    //     let sections = $(".target-section");
    //     let navigation_links = $(".header-nav li a");
    //     let active_section = $('section#' + window.element.id);

    //     if (scrollDir === "up") active_section = active_section.prevAll(".target-section").first();

    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY;
    //         windowHeight > 500 
    //             ? setStickyClass('fixed top-0 left-0 z-50') 
    //             : setStickyClass('relative');
    //     }
    // };

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
                    <li id="navHome"
                        className="current"
                    >
                        <a className="smoothscroll"  
                            href="#home" 
                            title="Home"
                        >Home</a>
                    </li>
                    <li id="navAbout"><a 
                        className="smoothscroll"  
                        href="#about" 
                        title="About"
                    >About</a></li>
                    <li id="navXP"><a 
                        className="smoothscroll"  
                        href="#XP" 
                        title="Experience"
                    >Experience</a></li>
                    <li id="navTestimonials"><a 
                        className="smoothscroll"  
                        href="#Testimonials2" 
                        title="Testimonials"
                    >Testimonials</a></li>
                    {/* <!--<li><a className="smoothscroll"  href="#Projects" title="Projects">Projects</a></li>--> */}
                    <li id="navContact"><a 
                        className="smoothscroll"
                        href="#contact"
                        title="Contact">Contact</a></li>
                </ul>
            </nav>
            <a 
                className="header-menu-toggle" 
                href="#0"
                onClick={(elem) => ssMobileMenu(elem)}
            >
                <span>Menu</span>
            </a>
        </header>
    )
}

// export default Nav;
