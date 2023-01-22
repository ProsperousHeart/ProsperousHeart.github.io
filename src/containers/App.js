// import React, { useRef, useState, useEffect } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav/Nav';
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
import { Divider } from '@mui/material'; // https://www.geeksforgeeks.org/how-to-use-divider-component-in-reactjs/ --> https://mui.com/material-ui/migration/migration-v4/

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

function App() { // original - functional component
  // const [currloc, setCurrloc] = useState(window.location);
  // // const [currloc, setCurrloc] = useState(window.location.hash);
  // const [prevloc, setPrevloc] = useState(currloc);
  // // const [testcnt, setTestcnt] = useState(0);
  // console.log("current window location:", window.location);

  // const [activeNav, setActiveNav] = useState("home");
  // const [activeElem, setActiveElem] = useState(document.getElementById("home"));

  const [activeNav, setActiveNav] = useState(document.getElementById("navHome"));
  // const updateActiveNav = (navClass) => {
  //   setActiveNav(() => document.getElementById(navClass));
  // }
  // useEffect(() => {
  //   // activeNav.classList.add("current");
  //   console.log("active nav:", activeNav);
  // }, [activeNav]);

  const [prevActiveNav, setPrevActiveNav] = useState(document.getElementById("navHome"));
  // const updatePrevNav = (navClass) => {
  //   setPrevActiveNav(() => document.getElementById(navClass));
  // }
  // useEffect(() => {
  //   // activeNav.classList.add("current");
  //   // prevActiveNav.classList.remove("current");
  //   console.log("prev nav:", prevActiveNav);
  // }, [prevActiveNav]);

  const [nextActiveNav, setNextActiveNav] = useState(document.getElementById("navAbout"));

  const setNavSecs = (prev, active) => {
    console.log(`Updating section for prev (${prev}) and next (${active})`)
    setPrevActiveNav(document.getElementById(prev));
    // updatePrevNav(prev);
    console.log("prevActiveNav:",prevActiveNav);
    setActiveNav(document.getElementById(active));
    // updateActiveNav(active);
    console.log("activeNav:", activeNav);
  }

  function setNavClasses(prevElem, nextElem) {
    console.log("prevActiveNav:", prevActiveNav);
    prevActiveNav.classList.remove("current");
    console.log("activeNav:", activeNav);
    activeNav.classList.add("current");
    console.log("nextActiveNav:", nextActiveNav);
  }

  // const [elemItm4ClassChg, setElemItm4ClassChg] = useState(activeNav.classList.add("current"));
  // const [scrollDir, setScrollDir] = useState(useDetectScroll({}));
  const [scrollDir] = useDetectScroll({});
  
  useEffect(() => {
    // const navSec = document.getElementsByClassName("header-nav-wrap")[0];
    const navSec = document.getElementsByClassName("s-header")[0];
    // const abtSec = document.getElementById("about");
    // const sticky = homeSec.offsetTop;
    // const sticky = abtSec.offsetTop - 100;
    const sticky = document.getElementById("about").offsetTop - 100;
    // const sticky = {aboutSec}.offsetTop - 100;

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

      // // this section will be to update colors of nav bar
      // if (window.pageYOffset >= aboutSec.offsetTop) {
      //   // console.log("About section has come to top! Time for menu color change")
      //   navSec.classList.remove("target-section");
      //   aboutSec.classList.add("target-section");
      // } //else if 
      

      
      // if (currloc !== window.location.hash) {
      //   console.log("curr loc:", currloc);
      //   setCurrloc(window.location.hash);
      //   console.log("curr loc (updated):", currloc);
      // }
      // if (currloc !== prevloc) {
      //   console.log("updating previous location from:", prevloc);
      //   setPrevloc(currloc);
      // }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };

    // function watchScroll() {
    //   window.addEventListener('scroll', setCurrLoc);
    // }
    // watchScroll();
    // return () => window.removeEventListener('scroll', setCurrLoc);

    // // const onScroll = () => setLoc(window.location.hash);
    // // // clean up code
    // // window.removeEventListener('scroll', onScroll);
    // // window.addEventListener('scroll', onScroll, { passive: true });
    // // return () => window.removeEventListener('scroll', onScroll);
  // }, [currloc, prevloc]);
});

  // useEffect(() => {
  //   prevActiveNav.classList.remove("current");
  //   activeNav.classList.add("current");
  // }, [setPrevActiveNav, setActiveNav]);

  const homeSec = document.getElementById("home");
  // const [homeSec, setHomeSec] = useState(document.getElementById("home"));
  const aboutSec = document.getElementById("about");
  // const [aboutSec, setAboutSec] = useState(document.getElementById("about"));
  // const xpSec = document.getElementById("XP");
  // const testimonialsSec = document.getElementById("Testimonials2");
  // const contactSec = document.getElementById("contact");

  return (
    <div className="App">
      {/* <FunBG id="tsparticles" /> */}
      {/*<Particles options={particlesOptions}/>*/}
      <Waypoint
        onEnter={({ previousPosition, currentPosition, event }) => {
          // do something useful!
          // console.log("isntantiation - setting active nav to navHome");
          // setPrevActiveNav(document.getElementById("navHome"));
          console.log(`WP0 [before nav] OE with direction:  ${scrollDir}`);
          // setNavSecs("navHome", "navHome");
          // console.log("activeNav:", activeNav);
          // console.log("prevActiveNav:", prevActiveNav);
        }}
        onLeave={({ previousPosition, currentPosition, event }) => {
          // do something useful!
          // console.log("WP0 off screen @ top");
          // console.log("current active nav:", activeNav);
          console.log(`WP0 [before nav] OL with direction:  ${scrollDir}`);
          // console.log("activeNav:", activeNav);
          // console.log("prevActiveNav:", prevActiveNav);
          setPrevActiveNav(document.getElementById("navHome"));
          setActiveNav(document.getElementById("navAbout"));
          setNextActiveNav(document.getElementById("navXP"));
        }}
      />
      {/* <Navigation onRouteChg={this.onRouteChg} isSignedIn={isSignedIn} /> */}
      <Nav scrollDir={scrollDir} />
      <Home 
        // ref={homeRef} 
        // visSelection={`${visibleSection === "Home" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#home")}
      />
      <Waypoint
        onEnter={({ previousPosition, currentPosition, event }) => {
          // do something useful!
          console.log(`WP1 (after home/before about) OE with direction:  ${scrollDir}`);
          if (scrollDir === "down") {
            console.log(`WP1 (after home/before about) oE | Entering ABOUT section going ${scrollDir}`);
            setPrevActiveNav(document.getElementById("navHome"));
            setActiveNav(document.getElementById("navAbout"));
            setNextActiveNav(document.getElementById("navXP"));
            // setNavSecs("navHome", "navAbout");
            // console.log("prevActiveNav:", prevActiveNav);
            // console.log("activeNav:", activeNav);
          } else {
            console.log(`WP1 (after home/before about) oE | Entering HOME section going ${scrollDir}`);
            // setNavSecs("navAbout", "navHome");
            // // setPrevActiveNav(document.getElementById("about"));
            setPrevActiveNav(document.getElementById("navAbout"));
            // // console.log("prevActiveNav:", prevActiveNav);
            // // setActiveNav(document.getElementById("home"));
            setActiveNav(document.getElementById("navHome"));
            setNextActiveNav(document.getElementById("navHome")); // cause this is the 1st
          }
          console.log(`prev: ${prevActiveNav}`);
          console.log(`active: ${activeNav}`);
          // setNavClasses(prevActiveNav, activeNav);
          console.log("WP1 OE (after home/before about)  prev nav:", prevActiveNav);
          console.log("WP1 OE (after home/before about)  active nav:", activeNav);
          setNavClasses(prevActiveNav, activeNav);
        }}
        onLeave={({ previousPosition, currentPosition, event }) => {
          console.log(`WP1 (after home/before about) OL with direction:  ${scrollDir}`);
          // do something useful!
          // console.log("WP1 (after home/before about) off screen @ top - about section main focus - update menu link color here");
          if (scrollDir === "down") {
            console.log(`WP1 OL | Going ${scrollDir} toward about - nothing to be done?`);
            // setNavSecs("navHome", "navAbout");

          }
          else {
            console.log(`WP1 OL | Going ${scrollDir} toward home - update nav classes here????`);
            // setNavSecs("navAbout", "navHome");
            // console.log("Active nav:", activeNav); // should be about section
            setPrevActiveNav(document.getElementById("navAbout"));
            setActiveNav(document.getElementById("navHome"));
            setNextActiveNav(document.getElementById("navHome")); // cause this is the 1st
          }
          // console.log("should update nav classes OL?");
          // setNavClasses(prevActiveNav, activeNav);
          // console.log("updated active links in nav bar")
          console.log("WP1 OL prev nav:", prevActiveNav);
          console.log("WP1 OL active nav:", activeNav);
          setNavClasses(prevActiveNav, activeNav);
        }}
      />
      <Divider variant="middle" />
      <About 
        // ref={aboutRef} 
        // visSelection={`${visibleSection === "About" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#about")}
      />
      <Waypoint
        onEnter={({ previousPosition, currentPosition, event }) => {
          console.log(`WP2 (after about/before XP timeline) OE with direction:  ${scrollDir}`);
          let activeElem;
          let prevElem;
          // do something useful!
          // console.log(`from prevActiveNav: ${prevActiveNav}`);
          if (scrollDir === "down") {
            console.log("Going toward XP (timeline) -- update nav links here?")
            // setNavSecs("navAbout", "navXP");
            // console.log("active nav:", activeNav);
            setPrevActiveNav(document.getElementById("navAbout"));
            setActiveNav(document.getElementById("navXP"));
            setNextActiveNav(document.getElementById("navTestimonials"));
          }
          else {
            console.log("Going toward ABOUT")
            // setNavSecs("navXP", "navAbout");
            // console.log("Active nav:", activeNav);
            setPrevActiveNav(document.getElementById("navXP"));
            setActiveNav(document.getElementById("navAbout"));
            setNextActiveNav(document.getElementById("navHome"));
          }
          // console.log("updating classes for WP2");
          // setNavClasses(prevActiveNav, activeNav);
          // prevActiveNav.classList.remove("current");
          // activeNav.classList.add("current");
          // console.log("updated active links in nav bar - on leave WP2");
          // // setPrevActiveNav(document.getElementById("about"));
          // if (scrollDir === "down") {
          //   console.log("WP2 oe | Going into timeline");
          //   setPrevActiveNav(document.getElementById("navAbout"));
          //   setActiveNav(document.getElementById("navXP"));
          //   console.log("current active nag:", activeNav);
          //   console.log("set active nav bar links");
            
          //   activeNav.classList.add("current");
          //   prevActiveNav.classList.remove("current");
          // }
          // else {
          //   console.log("WP2 oe | Going into about - nothing changed yet");
          // }
          console.log("WP2 prev nav:", prevActiveNav);
          console.log("WP2 active nav:", activeNav);
          setNavClasses(prevActiveNav, activeNav);
          // console.log("WP2 prev nav:", prevActiveNav);
          // console.log("WP2 active nav:", activeNav);
        }}
        onLeave={({ previousPosition, currentPosition, event }) => {
          console.log(`WP2 (after about/before XP timeline) OL with direction:  ${scrollDir} (update colors???)`);
          
          setNavClasses(prevActiveNav, activeNav);
          // do something useful!
          // prevActiveNav.classList.remove("current");
          // // document.getElementById("navAbout").classList.add("current");
          // activeNav.classList.add("current");
          // console.log("updated active links in nav bar - on leave WP2");
          if (scrollDir === "down") {
            console.log(`Going toward XP timeline - update nav classes here!`);
            // setNavSecs("navHome", "navAbout");
            // setNextActiveNav(document.getElementById("navTestimonials"));
            setPrevActiveNav(document.getElementById("navAbout"));
            setActiveNav(document.getElementById("navXP"));
            setNextActiveNav(document.getElementById("navTestimonials"));
          }
          else {
            console.log(`Going toward about - update nav classes here????`);
            // setNavSecs("navAbout", "navHome");
            // console.log("Active nav:", activeNav); // should be about section
            setPrevActiveNav(document.getElementById("navXP"));
            setActiveNav(document.getElementById("navAbout"));
            setNextActiveNav(document.getElementById("navHome"));
          }
          // console.log("should update nav classes OL?");
          // setNavClasses(prevActiveNav, activeNav);
          // console.log("updated active links in nav bar")
          console.log("WP2 prev nav:", prevActiveNav);
          console.log("WP2 active nav:", activeNav);
          console.log("calling function to set classes ...");
          setNavClasses(prevActiveNav, activeNav);
        }}
      />
      <Divider variant="middle" />
      <Exp 
        // ref={xpRef} 
        // visSelection={`${visibleSection === "Exp" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#XP")}
      />
      <Waypoint
        onEnter={({ previousPosition, currentPosition, event }) => {
          console.log(`WP3 (after about/before XP timeline) OE with direction:  ${scrollDir}`);
          // console.log("prevActiveNav:", prevActiveNav);
          // do something useful!
          if (scrollDir === "down") {
            console.log("Going into testimonials");
            // setNavSecs("navXP", "navTestimonials");
          } else {
            console.log("Going into XP (timeline)");
            // setNavSecs("navTestimonials", "navXP");
          }
          // setNavClasses(prevActiveNav, activeNav);
        }}
        onLeave={({ previousPosition, currentPosition, event }) => {
          // do something useful!
          console.log(`WP3 (after about/before XP timeline) OL with direction:  ${scrollDir}`);
          // console.log(activeNav);
        }}
      />
      <ErrorBoundary>
        <Testimonials 
          // ref={testimonialsRef} 
          // visSelection={`${visibleSection === "Testimonials" ? ".target-section" : ""}`}
          // onClick={() => window.location.replace("/#Testimonials2")}
        />
      </ErrorBoundary>
      <Waypoint
        onEnter={({ previousPosition, currentPosition, event }) => {
          // do something useful!
          // setPrevActiveNav(document.getElementById("navTestimonials"));
          // console.log("prevActiveNav:", prevActiveNav);
          console.log(`WP4 (after Testimonials/before contact) OE with direction:  ${scrollDir}`);
        }}
        onLeave={({ previousPosition, currentPosition, event }) => {
          // do something useful!
          console.log(`WP4 (after Testimonials/before contact) OL with direction:  ${scrollDir}`);
        }}
      />
      <Divider variant="middle" />
      <Contact 
        // ref={contactRef} 
        // visSelection={`${visibleSection === "Contact" ? ".target-section" : ""}`}
        // onClick={() => window.location.replace("/#contact")}
      />
      <Divider variant="middle" />
      <Footer />
    </div>
  );

}

export default App;
