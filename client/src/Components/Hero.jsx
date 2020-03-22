import React from 'react'
import TextLoop from "react-text-loop";
import '../styles/Hero.css'
import Nav from './Nav'

const Hero = () => {

    return (
        <div className = "hero-container">
           <Nav/>
     
        <div id = "hero">
     
            <div className='header'>
            I am 
               <p>  [  <TextLoop children={[ "a food fanatic   ", "a dog lover", "   an innovator  ","an avid reader   "," a web developer",]} />  ]</p>

            </div>
        </div>
        </div>
    );

}
export default Hero