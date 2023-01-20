// import React, { useState, useEffect } from 'react';
import React from 'react';
// import './App.css';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

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
    </div>
  );

}

export default App;