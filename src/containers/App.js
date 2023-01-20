// import React, { useState, useEffect } from 'react';
import React from 'react';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Exp from '../components/XP/XP';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import './00-base.css';
import './00-sections.css';
import './01-main.css';
import './helpers.css';
import './media.css';

// require('dotenv').config();
// const SMARTBRAIN_BE = process.env.REACT_APP_BE;


function App() { // original - functional component
  // const { imgURL, isSignedIn, route, boxes, user, SMARTBRAIN_BE } = this.state;
  // console.log("render:", SMARTBRAIN_BE);

  // const [field, setField] = useState(TBD);

  return (
    <div className="App">
      {/* <FunBG id="tsparticles" /> */}
      {/*<Particles options={particlesOptions}/>*/}
      {/* <Navigation onRouteChg={this.onRouteChg} isSignedIn={isSignedIn} /> */}
      <Nav />
      <Home />
      <About />
      <Exp />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );

}

export default App;