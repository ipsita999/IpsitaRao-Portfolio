import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Nav.css'

// import {Route, NavLink, Switch} from 'react-router-dom'



class Nav extends React.Component {

    render() {
        return (
            <>
                <nav>



                    <div className="nav-left">
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
                    </div>
                    <div className="logo"> Ipsita Rao</div>

                    <div className="nav-right">
                        <a className="resume"
                            href="https://drive.google.com/open?id=1HW3SsVuFrO4a_1KpjimHM6NAcBvRkASR"
                        > Resume</a>
                        <a
                            href="https://www.linkedin.com/in/ipsita-rao/"> <img  className="linkedin" src="https://i.ibb.co/s1kBC53/linkedin-2.png" /></a>
                        <a
                            href="https://github.com/ipsita999"> <img className="git-icon" src="https://i.ibb.co/Pr1Gvyv/github-2.png" />
                        </a>
                    </div>
                </nav>


            </>
        )
    }
}
export default Nav