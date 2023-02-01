// import React, { useState } from 'react';
// import { useRef } from 'react';
import React from 'react';
// import { useEffect } from 'react';
import './Nav.css';
import $ from 'jquery';
// import clearNav from './clearNavFunc';

// function ssMobileMenu(element) {
//     // console.log("Clicked on element:", element);
//     var toggleButton = $('.header-menu-toggle'),
//         nav = $('.header-nav-wrap');
//     toggleButton.on('click', function(event){
//         event.preventDefault();
//         toggleButton.toggleClass('is-clicked');
//         nav.slideToggle();
//     });
//     if (toggleButton.is(':visible')) nav.addClass('mobile');
//     // window.on('resize', function() {
//     //     if (toggleButton.is(':visible')) nav.addClass('mobile');
//     //     else nav.removeClass('mobile');
//     // });
//     nav.find('a').on("click", function() {
//         if (nav.hasClass('mobile')) {
//             toggleButton.toggleClass('is-clicked');
//             nav.slideToggle(); 
//         }
//     });
// };

// const Nav = () => {
export default function Nav({navActiveStr, navPrevStr, ssMobileMenu}) {
    // const [stickyClass, setStickyClass] = useState('.header-nav li a');
    // const [dims, setDims] = useState({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    // });

    const toggleOpen = (evt, navStr) => {
        console.log(`${navStr} was clicked`)
        // evt.preventDefault();
        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');
        
        if (toggleButton.is(':visible')) {
            nav.addClass('mobile');

            console.log(`${navStr} menu option clicked`);
            // if (nav.hasClass('mobile')) {
            //     toggleButton.toggleClass('is-clicked');
            //     nav.slideToggle();
            // }
            nav.slideToggle();
        }
        toggleButton.toggleClass('is-clicked');
        // window.location.replace(`/${navStr}`);
    }

    // // "how to get all children element of html li"
    // // https://www.encodedna.com/javascript/how-to-get-all-li-elements-in-ul-using-javascript.htm
    // function getLIelems(parentID, tagName) {
    //     console.log(`parentID:  ${parentID} | tagName: ${tagName}`);
    //     const parent = document.getElementById(parentID);
    //     console.log(`parent: ${parent}`);
    //     const kids = parent.getElementsByTagName(tagName).innerHTML;
    //     console.log(`kids: ${kids}`);
    // }

    // const timeoutMS = 1000;
    return (
        <header className="nav-header">
            <div className="header-logo">
                {/* <a className="site-logo" href="#"><img src="images/logo.png" alt="Homepage"></a>*/}
                <a className="site-logo" href="#home" >
                    <img 
                        className="site-logo" 
                        src="/IMGs/white.png" 
                        alt="Homepage" 
                        // onClick={() => {
                        //     window.location.replace("/#");
                        // }}
                    />  
                </a>
            </div>
            <nav className="header-nav-wrap"> {/*<!-- see ssMobileMenu in main.js -->*/}
                <ul id="headerNav" className="header-nav">
                    <li id="navHome" className="current">
                        <a className="smoothscroll"  
                            href="#home" 
                            title="Home"
                            // onClick={() => setTimeout(clearNav, timeoutMS, "navHome")}
                            onClick={(event) => toggleOpen(event, "navHome")}
                        >Home</a>
                    </li>
                    <li id="navAbout">
                        <a className="smoothscroll"  
                            href="#about" 
                            title="About"
                            // onClick={() => setTimeout(clearNav, timeoutMS, "navAbout")}
                            onClick={(event) => toggleOpen(event, "navAbout")}
                        >About</a>
                    </li>
                    <li id="navXP"><a 
                        className="smoothscroll"  
                        href="#XP" 
                        title="Experience"
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navXP")}
                        onClick={(event) => toggleOpen(event, "navXP")}
                    >Experience</a></li>
                    <li id="navTestimonials"><a 
                        className="smoothscroll"  
                        href="#Testimonials2" 
                        title="Testimonials"
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navTestimonials")}
                        onClick={(event) => toggleOpen(event, "navTestimonials")}
                    >Testimonials</a></li>
                    {/* <!--<li><a className="smoothscroll"  href="#Projects" title="Projects">Projects</a></li>--> */}
                    <li id="navContact"><a 
                        className="smoothscroll"
                        href="#contact"
                        title="Contact"
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navContact")}
                        onClick={(event) => toggleOpen(event, "navContact")}
                    >Contact</a></li>
                </ul>
            </nav>
            <a 
                className="header-menu-toggle" 
                href="#home"
                // onClick={(elem) => ssMobileMenu(elem)}
                onClick={(event) => {
                    event.preventDefault();
                    toggleOpen(event, "Mobile Menu")
                }}
            >
                <span>Menu</span>
            </a>
        </header>
    )
}

// export default Nav;
