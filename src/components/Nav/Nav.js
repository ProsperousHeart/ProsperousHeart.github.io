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
// export default function Nav({navActiveStr, navPrevStr, ssMobileMenu, funcSetNavStr}) {
// export default function Nav({funcSetNavStr}) {
export default function Nav({setActiveNavStr}) {
    // const [stickyClass, setStickyClass] = useState('.header-nav li a');
    // const [dims, setDims] = useState({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    // });
    const toggleOpen = (evt, navStr) => {
        console.log(`${navStr} menu option was clicked - setting activeNavStr`);
        setActiveNavStr(navStr);
        // evt.preventDefault();
        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');
        
        if (toggleButton.is(':visible')) {
            nav.addClass('mobile');
            // if (nav.hasClass('mobile')) {
            //     toggleButton.toggleClass('is-clicked');
            //     nav.slideToggle();
            // }
            nav.slideToggle();
        }
        toggleButton.toggleClass('is-clicked');
        // window.location.replace(`/${navStr}`);
    };

    // useEffect((toggleOpen) => {

    //     window.addEventListener('scroll', toggleOpen);
    //     return () => {
    //         window.removeEventListener('scroll', toggleOpen);
    //     }

    // }, []);

    // // "how to get all children element of html li"
    // // https://www.encodedna.com/javascript/how-to-get-all-li-elements-in-ul-using-javascript.htm
    // function getLIelems(parentID, tagName) {
    //     console.log(`parentID:  ${parentID} | tagName: ${tagName}`);
    //     const parent = document.getElementById(parentID);
    //     console.log(`parent: ${parent}`);
    //     const kids = parent.getElementsByTagName(tagName).innerHTML;
    //     console.log(`kids: ${kids}`);
    // }
    

    function scrollToTop() {
        // window.location.replace("/#");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function scrollToPos(idStr) {
        // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
        const elemTop = document.querySelector(idStr).getBoundingClientRect().top;
        console.log(`elemTop:  ${elemTop}`);
        console.log(elemTop);
        window.scrollTo({
            top: elemTop + window.pageYOffset,
            behavior: 'smooth'
        });
    }

    // const timeoutMS = 1000;
    return (
        <header className="nav-header">
            <div className="header-logo">
                <img 
                    className="site-logo" 
                    src="/IMGs/white.png" 
                    alt="Homepage" 
                    onClick={scrollToTop}
                /> 
            </div>
            <nav className="header-nav-wrap"> {/*<!-- see ssMobileMenu in main.js -->*/}
                <ul id="headerNav" className="header-nav">
                    {/* <li id="navHome" className="current">
                        <a className="smoothscroll"  
                            href="#home" 
                            title="Home"
                            // onClick={() => setTimeout(clearNav, timeoutMS, "navHome")}
                            onClick={(event) => toggleOpen(event, "navHome")}
                        >Home</a>
                    </li> */}                    
                    <li id="navHome" 
                        className="current smoothscroll"
                        title='Home'
                        onClick={scrollToTop}
                    >Home</li>
                    <li id="navAbout"
                        className="smoothscroll"  
                        title="About"
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navAbout")}
                        onClick={(event) => {
                            scrollToPos('#about');
                            toggleOpen(event, "navAbout");
                        }}
                    >About</li>                    
                    <li id="navXP"
                        className="smoothscroll"
                        title="Experience"
                        onClick={(event) => {
                            scrollToPos('#XP');
                            toggleOpen(event, "navXP");
                            // setTimeout(clearNav, timeoutMS, "navXP"); /* could be removed if the spacing was right, maybe? */
                        }}
                    >Experience</li>
                    <li id="navTestimonials"
                        className="smoothscroll"
                        title="Testimonials"
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navTestimonials")}
                        onClick={(event) => {
                            scrollToPos('#Testimonials2');
                            toggleOpen(event, "navTestimonials")
                        }}
                    >Testimonials</li>
                    <li id="navContact"
                        className="smoothscroll"
                        title="Contact"
                        // onClick={() => setTimeout(clearNav, timeoutMS, "navContact")}
                        onClick={(event) => {
                            scrollToPos('#contact');
                            toggleOpen(event, "navContact")
                        }}
                    >Contact</li>
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
