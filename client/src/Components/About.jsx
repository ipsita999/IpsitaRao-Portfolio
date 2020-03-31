import React from 'react'
import '../styles/About.css'
import "../images/skills.png"




const About = () => {
    // render()
    return (


        <div className='about--container' id="about">
            <div className="top-sec">
                <div className="me"></div>
                <div className="about-me">
                    <div className="about-title">Hi. I'm Ipsita Rao </div>
                    <div className="brand">
                        I am a mission-driven software developer focused on client relations and creating meaningful collaborations to produce innovative solutions to complex problems. I excel at taking initiative and ownership of my projects/products and proactively resolving issues. As an avid and fast learner, I aspire to work in a challenging environment to continually grow my skills while also giving back to my community.
                </div>
                </div>
            </div>
            <div className="skills-sec">
                {/* <div className="skills-title">WHAT i KNOW</div> */}
                {/* <div className="colon">:</div> */}
                <img src={require("../images/skills.png")}  className = "skills-title"/>
                <p className="skills"> HTML, CSS, Sass, JavaScript, React.js, Express, Node, SQL, PostgreSQL, Ruby, Rails, GitHub, Adobe XD</p>
            </div>

        </div>



    )
}




export default About