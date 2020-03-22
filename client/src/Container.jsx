import React from 'react'
import Nav2 from './Components/Nav2'
// import Hero from './Components/Hero'
import About from './Components/About'
// import Portfolio from './Portfolio'
import Contact from './Components/Contact'
import Works from './Components/Works'
// import Collection from './Accordion/Collection'
import './styles/Container.css'
// import { ParallaxProvider } from 'react-scroll-parallax';
import './styles/Container.css'

const Container = () => {




    return(
        <div className = 'main--container'>
         {/* <Hero/> */}
       
        <Nav2/>
        <About/>
        <Works/>
        <Contact/>
        </div>
        // </div>
  
     
    )
}

export default Container