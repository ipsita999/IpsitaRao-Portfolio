import React from 'react'
import TextLoop from "react-text-loop";
import '../styles/Hero.css'
import Nav from './Nav'

const Hero = () => {

    sendNotif = () => {
        {
            UA.then(sdk => {
                    sdk.register().then(console.log('you are registered'))
            })
        }

    }

    UA.then(sdk => {
        sdk.plugins.load('html-prompt', 'https://aswpsdkus.com/notify/v1/ua-html-prompt.min.js', {
            appearDelay: 5000, 
            disappearDelay: 17000
        })
            .then(plugin => plugin.prompt())
    })


    

    return (
        <div className = "hero-container">
           <Nav/>
     
        <div id = "hero">
     
            <div className='header'>
            I am 
               <p>  [  <TextLoop children={[" a web developer", "a food fanatic   ", "a dog lover", "   an innovator  ","an avid reader   "]} />  ]</p>
               <button className='regButton' onClick ={sendNotif} > Subscribe!
                        {/* <a href="/registration-page.html" className='web'>Subscribe!</a> */}
                    </button>

            </div>
       

        </div>
        </div>
    );

}
export default Hero