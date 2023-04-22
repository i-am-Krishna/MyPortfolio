import React from 'react'
// import PortfolioImg from './portfolioImg.jpeg'
import LinkedIn from './linkedIn.gif'
import Github from './github.gif'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

export const Home = () => {
  return (
    <div id='home' className='home' 

    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" 
         >
        <div className='leftSide'>
            <div className='fonts'>
                Hi &#128519; <br />
                I' am <span>

                Krishna
                </span>
                 <br />
                MERN Developer 
            </div>
            <div className='resumeBtn'><button><a href="https://drive.google.com/file/d/1M5aTSBIXVfCdPG9coC5eo-sBnpFxgekF/view?usp=sharing">Resume</a></button></div>
            <div className='social-media'>
            <button><a href="https://www.linkedin.com/in/iamkrishhna/"><img src={LinkedIn} alt="LinkedIn" /></a></button>
            <button><a href="https://github.com/i-am-Krishna"><img src={Github} alt="Github" /></a></button>
            
            </div>
        </div>
        <div className='rightSide'>
            {/* <div><img src={PortfolioImg} alt="myPic" /></div> */}
            
        </div>
    </div>
  )
}
