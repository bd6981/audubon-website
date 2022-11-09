import React from 'react';
import birdsData from './BirdsData.js';
import { Link } from 'react-router-dom';




function Home (props)  {
      
return(
<div>
  <div className= 'header'>
      <h1>Audubon Society</h1>
  </div>
        <div className='bird'>
      {props.birdsData.map((bird, index) => {
          return (
              <div className='images' key={index}>
                  <Link to={ "/birdpage/" + birdsData.name}><img src={bird.image}></img>  </Link>
              </div>
          )
      }
      )}
  </div>
  </div>
)}
export default Home;



