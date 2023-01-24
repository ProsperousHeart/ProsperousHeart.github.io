import React, { useState } from 'react';
// import { useRef } from 'react';
// import React from 'react';
import { useEffect } from 'react';
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
export default function Nav({navActiveStr, navPrevStr}) {
    // const [stickyClass, setStickyClass] = useState('.header-nav li a');
    const [dims, setDims] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });


    // // "how to get all children element of html li"
    // // https://www.encodedna.com/javascript/how-to-get-all-li-elements-in-ul-using-javascript.htm
    // function getLIelems(parentID, tagName) {
    //     console.log(`parentID:  ${parentID} | tagName: ${tagName}`);
    //     const parent = document.getElementById(parentID);
    //     console.log(`parent: ${parent}`);
    //     const kids = parent.getElementsByTagName(tagName).innerHTML;
    //     console.log(`kids: ${kids}`);
    // }

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

    // function clearNav(clickedNavStr) {
    //     // setClickedNav(clickedNavStr)
    //     const navMenuIDs = {
    //       home: "navHome",
    //       about: "navAbout",
    //       xp: "navXP",
    //       testimopnials: "navTestimonials",
    //       contact: "navContact"
    //     }
    //     console.log(`clearNav | This is a test for the menu clicks (clicked on ${clickedNavStr}) ... `);
    //     for (var key in navMenuIDs) {
    //       document.getElementById(navMenuIDs[key]).classList.remove("current");
    //     }
    //     document.getElementById(clickedNavStr).classList.add("current");
    // }

    // const timeoutMS = 500;
    return (
        <header className="s-header">
            <div className="header-logo">
                {/* <a className="site-logo" href="#"><img src="images/logo.png" alt="Homepage"></a>*/}
                <a className="site-logo" 
                    href="/#"
                    // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navHome")}
                    // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navHome")}
                    // onClick={() => setTimeout(clearNav, timeoutMS, "navHome")}
                    // onClick={setClickedNav("navHome")}
                >
                    <img 
                        className="site-logo" 
                        src="/IMGs/white.png" 
                        alt="Homepage" 
                        // onClick={() => {
                        //     window.location.replace("/#");
                        //     updateNav(navActive, "navHome");
                        // }}
                        // onClick={setActiveMenu("navHome")}
                        // onClick={console.log(document.getElementById("headerNav"))}
                    />  
                </a>
            </div>
            <nav className="header-nav-wrap"> {/*<!-- see ssMobileMenu in main.js -->*/}
                <ul id="headerNav" className="header-nav">  {/*<!-- see ssWaypoints in main.js -->*/}
                    <li id="navHome"
                        className="current"
                    >
                        <a className="smoothscroll"  
                            href="#home" 
                            title="Home"
                            // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navHome")}
                            // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navHome")}
                            // onClick={() => setTimeout(clearNav, timeoutMS, "navHome")}
                        >Home</a>
                    </li>
                    <li id="navAbout">
                        <a className="smoothscroll"  
                            href="#about" 
                            title="About"
                            // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navAbout")}
                            // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navAbout")}
                            // onClick={() => clearNav("navAbout")}
                            // onClick={() => setTimeout(clearNav, timeoutMS, "navAbout")}
                        >About</a>
                    </li>
                    <li id="navXP"><a 
                        className="smoothscroll"  
                        href="#XP" 
                        title="Experience"
                        //onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navXP")}
                        // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navXP")}
                        // onClick={() => clearNav("navXP")}
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navXP")}
                    >Experience</a></li>
                    <li id="navTestimonials"><a 
                        className="smoothscroll"  
                        href="#Testimonials2" 
                        title="Testimonials"
                        // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navTestimonials")}
                        // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navTestimonials")}
                        // onClick={() => clearNav("navTestimonials")}
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navTestimonials")}
                    >Testimonials</a></li>
                    {/* <!--<li><a className="smoothscroll"  href="#Projects" title="Projects">Projects</a></li>--> */}
                    <li id="navContact"><a 
                        className="smoothscroll"
                        href="#contact"
                        title="Contact"
                        // onClick={() => updateNav(activeElem, prevElem, prevNavActive, navActive, "navContact")}
                        // onClick={(event) => updateNav(event, navActiveStr, navPrevStr, prevNavActive, navActive, "navContact")}
                        // onClick={() => clearNav("navContact")}
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navContact")}
                    >Contact</a></li>
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
