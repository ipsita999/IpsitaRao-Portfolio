import React from 'react'
import '../styles/Works.css'
// import Nav2 from './Nav'

const Works = () => {
    // render()
    return(
        <div className = "works--container" id = "works">
        <div className = "works-title"><div>WORKS</div></div>
        <div className = "projects-sec">
            <div className = "sec-title">PROJECTS</div>
            <div className = "p1">
                <img className ="stitched-pic" src ="https://media.giphy.com/media/RMNVUVEYkDZydqzqkS/giphy.gif"/>
                <div className = "info-box">
                    <p className = "title">STITCHED</p>
              <p className = 'info'> A fully responsive design-template for a clothing delivery serivce. Built using pure HTML, CSS and Javascript.</p>
              <div className = "linkss">
                  <a className="web" href = "https://ipsita999.github.io/Project-1/"> Website</a>
                  <a className = "git-link" href = "https://github.com/ipsita999/Project-1"> Github</a>
              </div>
              </div>
            </div>
            <div className = "p2">
                <img className ="cooking-pic" src ="https://media.giphy.com/media/WTA8S0dyWHM5NEOq6h/giphy.gif"/>
                <div className = "info-box">
                    <p className = "title">GOOD COOKING</p>
              <p className = 'info'>  Application where users can create and add recipes to database and search for new recipes. Application created using React, JavaScript, and third-party API.</p>
              <div className = "linkss">
                  <a className="web" href = "http://good-cooking.surge.sh/"> Website</a>
                  <a className = "git-link" href = "https://github.com/ipsita999/Recipe-App"> Github</a>
              </div>
              </div>
            </div>
            <div className = "p1">
                <img className ="richord-pic" src ="https://media.giphy.com/media/JpjtqhQGlK4XPKkxKL/giphy.gif"/>
                <div className = "info-box">
                    <p className = "title">RICHORD</p>
              <p className = 'info'> a React-based web application that allows users to create melodies. Users can login to save, play, and delete original tracks. Express, Postgres, Sequelize, and Node were used to create the database and authenticate the back-end.</p>
              <div className = "linkss">
                  <a className="web" href = "http://richord.surge.sh/"> Website</a>
                  <a className = "git-link" href = "https://github.com/ipsita999/RICHORD-APP/tree/ipsita-branch"> Github</a>
              </div>
              </div>
            </div>
        </div>
        <div className = "client-sec">
            <div className = "sec-title">CLIENT WORK</div>
            <div className = "p2">
                <img className ="plastic-pic" src ="https://media.giphy.com/media/Qs1fgVed3P2hVQ4vow/giphy.gif"/>
                <div className = "info-box">
                    <p className = "title"> PLASTIC BAG BAN </p>
              <p className = 'info'> Website serves as a PSA for the plastic bag ban recently implemented in the New York State. Built with CSS/SCSS, HTML, JavaScript, and jQuery.</p>
              <div className = "linkss">
                  <a className="web" href = "https://schlepyourshitny.com/"> Website</a>
                  <a className = "git-linka" href = "#"> Github</a>
              </div>
              </div>
            </div>
        </div>
        
       
    
        </div>
    )
}

export default Works