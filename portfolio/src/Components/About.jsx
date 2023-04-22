import React from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

export const About = () => {
  return (
    <div id='about' className='about'>

<h1 >About</h1>

<div  data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >

<h3 
>I' am Krishna Kumar Gupta</h3>


<p>Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.</p>
    </div>
<h6>Drop a mail @kumarkrishn663@gmail.com</h6>

    </div>
  )
}
