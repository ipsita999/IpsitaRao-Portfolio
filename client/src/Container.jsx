import React from 'react'
import Nav2 from './Components/Nav2'
import About from './Components/About'
import Contact from './Components/Contact'
import Works from './Components/Works'
import './styles/Container.css'

const Container = () => {




    return (
        <div className='main--container'>
            <Nav2 />
            <About />
            <Works />
            <Contact />
        </div>
    )
}

export default Container