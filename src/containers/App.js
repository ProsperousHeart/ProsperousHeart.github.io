// import React, { useRef, useState, useEffect } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav/Nav'; // used for testing
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Exp from '../components/XP/XP';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary';
// import main_js from './js/main';
import { Waypoint } from 'react-waypoint';
import { useDetectScroll } from "@smakss/react-scroll-direction"; // https://stackoverflow.com/a/62497293/10474024
// import { Divider } from '@mui/material'; // https://www.geeksforgeeks.org/how-to-use-divider-component-in-reactjs/ --> https://mui.com/material-ui/migration/migration-v4/
// import $ from 'jquery';
import clearNav from '../components/Nav/clearNavFunc';

import './00-base.css';
import './00-sections.css';
import './01-main.css';
import './helpers.css';
import './media.css';
import './iconic/css/iconmonstr-iconic-font.css';

// var modernizr = require("modernizr");  // https://www.npmjs.com/package/modernizr

// var PropTypes = React.PropTypes;

// require('dotenv').config();
// const SMARTBRAIN_BE = process.env.REACT_APP_BE;

// function ssMobileMenu(element) {

//   // console.log("Clicked on element:", element);

//   var toggleButton = $('.header-menu-toggle'),
//       nav = $('.header-nav-wrap');

//   toggleButton.on('click', function(event){
//       event.preventDefault();

//       toggleButton.toggleClass('is-clicked');
//       nav.slideToggle();
//   });

//   if (toggleButton.is(':visible')) nav.addClass('mobile');

//   // window.on('resize', function() {
//   //     if (toggleButton.is(':visible')) nav.addClass('mobile');
//   //     else nav.removeClass('mobile');
//   // });

//   nav.find('a').on("click", function() {

//       if (nav.hasClass('mobile')) {
//           toggleButton.toggleClass('is-clicked');
//           nav.slideToggle(); 
//       }
//   });

// };

function App() { // original - functional component

  // const [activeNav, setActiveNav] = useState("home");
  // const [activeElem, setActiveElem] = useState(document.getElementById("home"));

  const [activeNavStr, setActiveNavStr] = useState("navHome");
  // const [activeNav, setActiveNav] = useState(document.getElementById(activeNavStr));

  const [prevNavStr, setPrevNavStr] = useState("navHome");
  // const [prevActiveNav, setPrevActiveNav] = useState(document.getElementById(prevNavStr));

  // const [nextActiveNav, setNextActiveNav] = useState(document.getElementById("navAbout"));

  const [scrollDir] = useDetectScroll({});

  useEffect(() => {
    // const navSec = document.getElementsByClassName("header-nav-wrap")[0];
    const navSec = document.getElementsByClassName("s-header")[0];
    const sticky = document.getElementById("about").offsetTop - 100;

    const scrollCallBack = window.addEventListener("scroll", () => {
      // this is the scroll listener to stick menu
      if (window.pageYOffset > sticky) {
        navSec.classList.add("sticky");
        navSec.classList.add("offset");        
        navSec.classList.add("scrolling");
        // console.log("navSec:", navSec);
        // if (headerText !== fixedText) {
        //   setHeaderText(fixedText);
        // }
      } else {
        navSec.classList.remove("sticky");
        navSec.classList.remove("offset");        
        navSec.classList.remove("scrolling");
        // if (headerText !== whenNotFixed) {
        //   setHeaderText(whenNotFixed);
        // }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  });

  // function clearNav(clickedNavStr) {

  //   const navMenuIDs = {
  //     home: "navHome",
  //     about: "navAbout",
  //     xp: "navXP",
  //     testimopnials: "navTestimonials",
  //     contact: "navContact"
  //   }
  //   for (var key in navMenuIDs) {
  //     document.getElementById(navMenuIDs[key]).classList.remove("current");
  //   }
  //   document.getElementById(clickedNavStr).classList.add("current");
  // }

  function wpDance(wpType, wpNum, loc, prevWPpos, currWPpos, evt, 
    wpTop, vpTop, vpBtm, data) {

    const destination = data.dest;
    if (scrollDir === "down"){
      console.log(`WP${wpNum} ${wpType} (${loc}) |  scrollDir: ${scrollDir}  ---> going into ${destination}`);
    }
    // else if ( scrollDir === "still" ) {

    // }
    else {
      console.log(`WP${wpNum} ${wpType} (${loc}) |  scrollDir: ${scrollDir}  ---> likely the start`);
    }
    
    const intPrevNavStr = data.prev;
    console.log(`WP${wpNum} ${wpType} (${loc}) | intPrevNavStr: ${intPrevNavStr}`);
    const intActiveNavStr = data.curr;
    console.log(`WP${wpNum} ${wpType} (${loc}) | intActiveNavStr: ${intActiveNavStr}`);
    console.log(intActiveNavStr);
    // const intNextNavStr = data.next;
    // console.log(`WP${wpNum} ${wpType} (${loc}) | intNextNavStr: ${intNextNavStr}`);

    // getLIelems("headerNav", "li");

    console.log(`WP${wpNum} ${wpType} (${loc}) |  previousPosition: ${prevWPpos}`);
    console.log(`WP${wpNum} ${wpType} (${loc}) |  currentPosition: ${currWPpos}`);
    if (!evt) {
      console.log(`=============== WP${wpNum} ${wpType} (${loc}) | This came from a menu click? (likely just the start of site here) ===============`);
    }
    console.log(`WP${wpNum} ${wpType} (${loc}) |  event: ${evt}`);
    console.log(`WP${wpNum} ${wpType} (${loc}) |  waypointTop: ${wpTop}`);
    console.log(`WP${wpNum} ${wpType} (${loc}) |  viewportTop: ${vpTop}`);
    console.log(`WP${wpNum} ${wpType} (${loc}) |  viewportBottom: ${vpBtm}`);

    if (scrollDir === "down" || scrollDir === "up"){
      if (intPrevNavStr !== intActiveNavStr) {
        console.log("updating 'React globals'");
        // setNavSecs(intPrevNavStr, intActiveNavStr);
        setPrevNavStr(intPrevNavStr);
        // setPrevActiveNav(document.getElementById(intPrevNavStr));
  
        setActiveNavStr(intActiveNavStr);
        // setActiveNav(document.getElementById(intActiveNavStr));
  
        // setNextActiveNav(document.getElementById(intNextNavStr));
            
        // console.log(`WP${wpNum} ${wpType} (${loc}) prev (uncertain if updated): ${prevActiveNav}`);
        // console.log(prevActiveNav);
        // console.log(`WP${wpNum} ${wpType} (${loc}) active (uncertain if updated): ${activeNav}`);
        // console.log(activeNav);
        // console.log(`WP${wpNum} ${wpType} (${loc}) next (uncertain if updated): ${nextActiveNav}`);
        // console.log(nextActiveNav);
  
        console.log(`SEtting NAv classes with ${intPrevNavStr} and ${intActiveNavStr}`)
  
        let temp = document.getElementById(intPrevNavStr);
        console.log(temp);
        document.getElementById(intPrevNavStr).classList.remove("current");
  
        temp = document.getElementById(intActiveNavStr);
        console.log(temp);
        document.getElementById(intActiveNavStr).classList.add("current");
  
        // console.log(`WP${wpNum} ${wpType} (${loc}) prev nav (NOT updated):`, prevActiveNav); // I don't think this is showing the most recent update yet
        // console.log(`WP${wpNum} ${wpType} (${loc}) active nav (NOT updated):`, activeNav);
        // console.log(`WP${wpNum} ${wpType} (${loc}) next (uncertain if updated): ${nextActiveNav}`);
  
        // // final check if linked clicked
        // const currentURL = window.location.href;
        // console.log(`WP${wpNum} ${wpType} (${loc}) | Current URL:  ${currentURL}`)
          
        // const navMenuIDs = {
        //   "#home": "navHome",
        //   "#about": "navAbout",
        //   "#XP": "navXP",
        //   "#Testimonials2": "navTestimonials",
        //   "#contact": "navContact"
        // }
        // if (currentURL.includes("#")) {
        //   console.log(`WP${wpNum} ${wpType} (${loc}) | lastNav URL:  ${lastNav}`)
          
          
        //   if (clickedBool) {
        //     console.log(`WP${wpNum} ${wpType} (${loc}) | A LINK WAS CLICKED!!! Must update NAV`);
        //     for (const [key, val] of Object.entries(navMenuIDs)) {
        //       if (currentURL.includes(key)) {
        //           // found = true;for (var key in navMenuIDs) {
        //           document.getElementById(val).classList.add("current");
        //           setClickedBool(false);
        //           setLastNav(key);
        //           console.log(`WP${wpNum} ${wpType} (${loc}) | only active nav should be ${key}`);
        //       } else {
        //         document.getElementById(val).classList.remove("current");
        //       }
        //     }
        //   }
        //   else {
        //     console.log(`WP${wpNum} ${wpType} (${loc}) | No link cancelled - just moving through with last nav @ ${lastNav} ...`);
        //   }
  
        //   // if (currentURL.includes(lastNav)) {
        //   //   if (clickedBool) {
        //   //     console.log("A LINK WAS CLICKED!!!");
        //   //     setClickedBool(false);
        //   //     // let found = false;
        //   //     for (const [key, val] of Object.entries(navMenuIDs)) {
        //   //       if (currentURL.includes(key)) {
        //   //         // found = true;for (var key in navMenuIDs) {
        //   //         document.getElementById(val).classList.add("current");
        //   //       } else {
        //   //         document.getElementById(val).classList.remove("current");
        //   //       }
                  
        //   //     }
        //   //   }
        //   // } else {
  
        //   // }
        // }
        clearNav(intActiveNavStr);
      }
    }
    
  }

  return (
    <div className="App">
      {/* <FunBG id="tsparticles" /> */}
      {/*<Particles options={particlesOptions}/>*/}
      <Waypoint // WP0
        onEnter={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom }) => {
          // console.log("isntantiation - setting active nav to navHome");
          let data = null;
          if (scrollDir === "down" || scrollDir === "still"){
            data = {
              prev: "navHome",
              curr: "navHome",
              // next: "navAbout",
              dest: "about section"
            }
          }
          else { // SCROLLING UP
            data = {
              prev: "navAbout",
              curr: "navHome",
              // next: "navHome",
              dest: "home section"
            }
          }
          console.log("Calling the wpDance ...");
          wpDance("OE", 0, "before Nav", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
        onLeave={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom }) => {
          let data = null;
          if (scrollDir === "down" || scrollDir === "still"){
            data = {
              prev: "navHome",
              curr: "navAbout",
              // next: "navXP",
              dest: "about section"
            }
          }
          else { // SCROLLING UP
            data = {
              prev: "navAbout",
              curr: "navHome",
              // next: "navHome",
              dest: "home section"
            }
          }
          
          console.log("Calling the wpDance ...");
          wpDance("OL", 0, "before Nav", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
      />
      {/* <Navigation onRouteChg={this.onRouteChg} isSignedIn={isSignedIn} /> */}
      {/* <Nav scrollDir={scrollDir}  */}
      <Nav navActiveStr={activeNavStr} navPrevStr={prevNavStr} />
      {/* <Nav navActiveStr={activeNavStr} navPrevStr={prevNavStr} ssMobileMenu={ssMobileMenu} /> */}
      <Home 
        // ref={homeRef} 
        // visSelection={`${visibleSection === "Home" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#home")}
      />
      <Waypoint // WP1
        onEnter={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom }) => {
          let data = null;
          if (scrollDir === "down"){ // ABOUT on screen going up
            data = {
              prev: "navHome",
              curr: "navAbout",
              // next: "navXP",
              dest: "about section"
            }
          }
          else { // SCROLLING UP
            data = {
              prev: "navHome",
              curr: "navAbout",
              // next: "navHome",
              dest: "ABOUT section"
            }
          }
          console.log("Calling the wpDance ...");
          wpDance("OE", 1, "after home/before about", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
        onLeave={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom }) => {
          let data = null;
          if (scrollDir === "down"){  // ABOUT @ top
            data = {
              prev: "navAbout",
              curr: "navXP",
              // next: "navXP",
              dest: "XP timeline section"
            }
          }
          else { // SCROLLING UP - 
            data = {
              prev: "navXP",
              curr: "navAbout",
              // next: "navHome",
              dest: "ABOUT section"
            }
          }
          console.log("Calling the wpDance ...");
          wpDance("OL", 1, "after home/before about", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
      />
      {/* <Divider variant="middle" /> */}
      <About 
        // ref={aboutRef} 
        // visSelection={`${visibleSection === "About" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#about")}
      />
      <Waypoint // WP2
        onEnter={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom }) => {
          let data = null;
          if (scrollDir === "down"){
            data = {
              prev: "navAbout",
              curr: "navXP",
              next: "navTestimonials",
              dest: "XP (timeline)"
            }
          }
          else { // SCROLLING UP - timeline at top
            data = {
              prev: "navTestimonials",
              curr: "navXP",
              // next: "navAbout",
              dest: "XP (timeline)"
            }
            // data = {
            //   prev: "navXP",
            //   curr: "navAbout",
            //   dest: "ABOUT section"
            // }
            console.log("Calling the wpDance ...");
            wpDance("OE", 2, "after about/before XP timeline", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
          }
          // console.log("Calling the wpDance ...");
          // wpDance("OE", 2, "after about/before XP timeline", previousPosition, currentPosition, event, 
          //   waypointTop, viewportTop, viewportBottom, data);
        }}
        onLeave={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom  }) => {
          let data = null;
          if (scrollDir === "down"){
            data = {
              prev: "navAbout",
              curr: "navXP",
              // next: "navTestimonials",
              dest: "XP (timeline)"
            }
          }
          else { // SCROLLING UP
            data = {
              prev: "navXP",
              curr: "navAbout",
              // next: "navHome",
              dest: "ABOUT section"
            }
            // data = {
            //   prev: "navXP",
            //   curr: "navTestimonials",
            //   // next: "navHome",
            //   dest: "TESTIMONIALS section"
            // }
          }
          console.log("Calling the wpDance ...");
          wpDance("OL", 2, "after about/before XP timeline", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
      />
      {/* <Divider variant="middle" /> */}
      <Exp 
        // ref={xpRef} 
        // visSelection={`${visibleSection === "Exp" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#XP")}
      />
      <Waypoint // WP3
        onEnter={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom }) => {
          let data = null;
          if (scrollDir === "down"){
            data = {
              prev: "navXP",
              curr: "navTestimonials",
              // next: "navContact",
              dest: "TESTIMONIALS section"
            }
          }
          else { // SCROLLING UP -- testimonials @ top coming down
            data = {
              prev: "navContact",
              curr: "navTestimonials",
              // next: "navXP",
              dest: "TESTIMONIALS section"
            }
            // data = {
            //   prev: "navTestimonials",
            //   curr: "navXP",
            //   // next: "navXP",
            //   dest: "XP (timeline) section"
            // }
            // console.log("Calling the wpDance ...");
            // wpDance("OE", 3, "after XP timeline/before Testimonials", previousPosition, currentPosition, event, 
            //   waypointTop, viewportTop, viewportBottom, data);
          }
          console.log("Calling the wpDance ...");
          wpDance("OE", 3, "after XP timeline/before Testimonials", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
        onLeave={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom  }) => {
          let data = null;
          if (scrollDir === "down"){ // CONTACT coming into view from bottom
            data = {
              prev: "navTestimonials",
              curr: "navContact",
              // next: "navContact",
              dest: "CONTACT section"
            }
            // console.log("Calling the wpDance ...");
            // wpDance("OL", 3, "after XP timeline/before Testimonials", previousPosition, currentPosition, event, 
            //   waypointTop, viewportTop, viewportBottom, data);
          }
          else { // SCROLLING UP
            data = {
              prev: "navTestimonials",
              curr: "navXP",
              // next: "navAbout",
              dest: "XP (timeline)"
            }
            // data = {
            //   prev: "navContact",
            //   curr: "navTestimonials",
            //   // next: "navAbout",
            //   dest: "TESTIMONIALS section"
            // }
          }
          console.log("Calling the wpDance ...");
          wpDance("OL", 3, "after XP timeline/before Testimonials", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
      />
      <ErrorBoundary>
        <Testimonials 
          // ref={testimonialsRef} 
          // visSelection={`${visibleSection === "Testimonials" ? ".target-section" : ""}`}
          // onClick={() => window.location.replace("/#Testimonials2")}
        />
      </ErrorBoundary>
      <Waypoint // WP4
        onEnter={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom }) => {
          let data = null;
          if (scrollDir === "down"){
            data = {
              prev: "navTestimonials",
              curr: "navContact",
              // next: "navContact", // same because last section of site
              dest: "CONTACT section"
            }
          }
          else { // SCROLLING UP
            data = {
              prev: "navContact",
              curr: "navTestimonials",
              // next: "navXP",
              dest: "TESTIMONIALS section"
            }
            console.log("Calling the wpDance ...");
            wpDance("OE", 4, "after Testimonials/before contact", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
          }
        }}
        onLeave={({ previousPosition, currentPosition, event, waypointTop, viewportTop, viewportBottom  }) => {
          let data = null;
          if (scrollDir === "down"){
            data = {
              prev: "navTestimonials",
              curr: "navContact",
              // next: "navContact", // same because last section of site
              dest: "CONTACT section"
            }
          }
          else { // SCROLLING UP -- XP coming into view from top
            data = {
              prev: "navTestimonials",
              curr: "navXP",
              // next: "navXP",
              dest: "EXPERIENCE section"
            }
            // data = {
            //   prev: "navXP",
            //   curr: "navTestimonials",
            //   // next: "navXP",
            //   dest: "TESTIMONIALS section"
            // }
          }
          console.log("Calling the wpDance ...");
          wpDance("OL", 4, "after Testimonials/before contact", previousPosition, currentPosition, event, 
            waypointTop, viewportTop, viewportBottom, data);
        }}
      />
      {/* <Divider variant="middle" /> */}
      <Contact 
        // ref={contactRef} 
        // visSelection={`${visibleSection === "Contact" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#contact")}
      />
      {/* <Divider variant="middle" /> */}
      <Footer />
    </div>
  );

}

export default App;
