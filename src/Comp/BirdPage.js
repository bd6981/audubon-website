

import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import birdsData from './BirdsData' 


function BirdPage (props) {
    const bird = useParams();

    const showBird = birdsData.find(elements => elements.name === bird.name)
  
    
    return (
        <div >
            <div className="showpage">
            <h1>Audubon Society</h1>
            </div>
        <div>
            <div>{showBird.name}</div>
            <div>{showBird.genus}</div>
            <div><h1>conservationStatus</h1></div>
            <a href={showBird.homepage}><button>Read More</button></a>
            </div>
            <div className="img">
                <img src={showBird.image}></img>
            </div>
        </div>
    )
}
       
export default BirdPage;

// {/* 



// function BirdPage (props) {

//     let {bird} = useParams()
//     bird = parseInt(bird)

// return (
//     <div>
//         <h1>props.birds[bird].name</h1>
//         <h2>props.birds[bird].genus</h2>
//         <p>props.birds[bird].conservationStatus</p>
//         <img> alt ='bird' src={props.birds[bird].image}</img>
//         <button></button>
//     </div>
// )
// }
// export default BirdPage; */}