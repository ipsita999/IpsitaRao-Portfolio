import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Nav2.css'

// import {Route, NavLink, Switch} from 'react-router-dom'



class Nav2 extends React.Component {

    render() {
        return (
            <>
                <nav className='nav2'>
                    <div className="logo2"> Ipsita Rao</div>


                    <div className="nav-left2">
                        <Link
                            activeClass="active"
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                        > Home</Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            // offset={-85}
                            duration={500}
                        > About</Link>
                        <Link
                            activeClass="active"
                            to="works"
                            spy={true}
                            smooth={true}
                            offset={140}
                            duration={500}
                        > Works</Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            // offset={-70}
                            duration={500}
                        > Contact</Link>
                         <a className="resume2"
                            href="https://drive.google.com/open?id=1HW3SsVuFrO4a_1KpjimHM6NAcBvRkASR"
                        > Resume</a>
                        <a
                            href="https://www.linkedin.com/in/ipsita-rao/"> <img className="linkedin2" src="https://i.ibb.co/ScTk7t5/linkedin.png" />
                        </a>
                        <a
                            href="https://github.com/ipsita999"> <img className="linkedin2" src="https://i.ibb.co/74qdTmx/github-3.png" />
                        </a>
                    </div>

                    <div className="nav-right2">
                       
                    </div>
                </nav>


            </>
        )
    }
}
export default Nav2