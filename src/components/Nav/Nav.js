// import React, { useState } from 'react';
// import { useRef } from 'react';
import React from 'react';
// import { useEffect } from 'react';
import './Nav.css';
import $ from 'jquery';

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
        evt.preventDefault();
        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');
        
        if (toggleButton.is(':visible')) nav.addClass('mobile');

        console.log(`${navStr} menu option clicked`);
        // if (nav.hasClass('mobile')) {
        //     toggleButton.toggleClass('is-clicked');
        //     nav.slideToggle();
        // }
        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();
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

    function clearNav(clickedNavStr) {
        var nav = $('.header-nav-wrap');
        nav.slideToggle();

        const navMenuIDs = {
          home: "navHome",
          about: "navAbout",
          xp: "navXP",
          testimopnials: "navTestimonials",
          contact: "navContact"
        }
        for (var key in navMenuIDs) {
          document.getElementById(navMenuIDs[key]).classList.remove("current");
        }
        document.getElementById(clickedNavStr).classList.add("current");
    }

    // function deselectLinks() {
    //     const navMenuIDs = {
    //         "#home": "navHome",
    //         "#about": "navAbout",
    //         "#XP": "navXP",
    //         "#Testimonials2": "navTestimonials",
    //         "#contact": "navContact"
    //       }
    //       for (const [key, val] of Object.entries(navMenuIDs)) {
    //         document.getElementById(val).classList.remove("current");
    //       }
    // }

    const timeoutMS = 1000;
    return (
        <header className="s-header">
            <div className="header-logo">
                {/* <a className="site-logo" href="#"><img src="images/logo.png" alt="Homepage"></a>*/}
                <a className="site-logo" href="/home" >
                    <img 
                        className="site-logo" 
                        src="/IMGs/white.png" 
                        alt="Homepage" 
                        // onClick={() => {
                        //     window.location.replace("/#");
                        //     updateNav(navActive, "navHome");
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
                            // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navHome")}
                            // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navHome")}
                            onClick={() => setTimeout(clearNav, timeoutMS, "navHome")}
                            // onClick={(deselectLinks)}
                        >Home</a>
                    </li>
                    <li id="navAbout">
                        <a className="smoothscroll"  
                            href="#about" 
                            title="About"
                            // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navAbout")}
                            // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navAbout")}
                            // onClick={() => clearNav("navAbout")}
                            onClick={() => setTimeout(clearNav, timeoutMS, "navAbout")}
                            // onClick={(deselectLinks)}
                        >About</a>
                    </li>
                    <li id="navXP"><a 
                        className="smoothscroll"  
                        href="#XP" 
                        title="Experience"
                        //onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navXP")}
                        // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navXP")}
                        // onClick={() => clearNav("navXP")}
                        onClick={() => setTimeout(clearNav, timeoutMS, "navXP")}
                        // onClick={(deselectLinks)}
                    >Experience</a></li>
                    <li id="navTestimonials"><a 
                        className="smoothscroll"  
                        href="#Testimonials2" 
                        title="Testimonials"
                        // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navTestimonials")}
                        // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navTestimonials")}
                        // onClick={() => clearNav("navTestimonials")}
                        onClick={() => setTimeout(clearNav, timeoutMS, "navTestimonials")}
                        // onClick={(deselectLinks)}
                    >Testimonials</a></li>
                    {/* <!--<li><a className="smoothscroll"  href="#Projects" title="Projects">Projects</a></li>--> */}
                    <li id="navContact"><a 
                        className="smoothscroll"
                        href="#contact"
                        title="Contact"
                        // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navContact")}
                        // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navContact")}
                        // onClick={() => clearNav("navContact")}
                        onClick={() => setTimeout(clearNav, timeoutMS, "navContact")}
                        // onClick={(deselectLinks)}
                    >Contact</a></li>
                </ul>
            </nav>
            <a 
                className="header-menu-toggle" 
                href="#0"
                // onClick={(elem) => ssMobileMenu(elem)}
                onClick={(event) => toggleOpen(event, "Hamburger")}
            >
                <span>Menu</span>
            </a>
        </header>
    )
}

// export default Nav;
