import './App.css';
import {useState} from 'react';
import React from 'react';
import BirdPage from './Comp/BirdPage.js';
import Home from './Comp/Home.js'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom';
import birdsData from './Comp/BirdsData'

// reference for below: https://www.w3schools.com/react/react_usestate.asp
// https://www.w3schools.com/react/react_router.asp
//https://www.google.com/search?q=react+map&rlz=1C5CHFA_enUS1026US1026&sxsrf=ALiCzsZvwcSPy2w_XbcFIZZCyOVb2K6Qzg:1667959298829&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjasIbMgKD7AhWCLUQIHTFvApwQ_AUoAnoECAIQBA&biw=830&bih=859&dpr=1#fpstate=ive&vld=cid:d208fbac,vid:5llXA0RTYIU

 function App () {

      return (
          <div>
            <Link to ='/birdpage'></Link>
            <Routes>
                <Route path = '/' element= {<Home birdsData = {birdsData}/>}/>

                <Route path = '/birdpage/:name' element= {<BirdPage birdsData = {birdsData}/>}/>
            </Routes>
          </div>
      );
 }
    export default App; 
