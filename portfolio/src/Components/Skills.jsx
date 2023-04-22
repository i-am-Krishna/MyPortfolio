import React from 'react'
import './Skills.css'
import HtmlIcon from './htmlicon.png'
import JS from './javascript.png'
import react from './react.png'
import Redux from './redux.png'
import CSS from './css.png'
import MUI from './materialui.png'
import Mongo from './mongodb.png'
import Node from './nodejs.png'
import TypeS from './typescript.png'
import BS from './bootstrap.png'
import MYSQL from './mysql.png'
import AWS from './aws.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();



export const Skills = () => {
  return (
    <div id='skills' className='skills' 
    
    data-aos="flip-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    >
        <h1 className='headingS'>Skills</h1>
<div className='innerSkill'>

    <div className='frontend lang' >
        <h2>Front-end Skills</h2>
        <div className='mySkills'>
            <img src={HtmlIcon} alt="" />
            <span>HTML 5</span>
        </div>

        <div className='mySkills'>
            <img src={CSS} alt="" />
            <span>CSS 3</span>
        </div>
        <div className='mySkills'>
            <img src={JS} alt="" />
            <span>JAVASCRIPT</span>
        </div>
        <div className='mySkills'>
            <img src={react} alt="" />
            <span>REACT JS</span>
        </div>
        <div className='mySkills'>
            <img src={Redux} alt="" />
            <span>REDUX</span>
        </div>
        <div className='mySkills'>
            <img src={MUI} alt="" />
            <span>MATERIAL-UI</span>
        </div>
        <div className='mySkills'>
            <img src={TypeS} alt="" />
            <span>TYPESCRIPT</span>
        </div>
        <div className='mySkills'>
            <img src={BS} alt="" />
            <span>BOOTSTRAP</span>
        </div>

    </div>
    <div className='backend lang'><h2>Back-end Skills</h2>
    <div className='mySkills'>
            <img src={Node} alt="" />
            <span>NODE JS</span>
        </div>

        <div className='mySkills'>
            <img src='data:image/png;base64,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' alt="" />
            <span>EXPRESS JS</span>
        </div>
        <div className='mySkills'>
            <img src={Mongo} alt="" />
            <span>MONGO DB</span>
        </div>
        <div className='mySkills'>
            <img src={MYSQL} alt="" />
            <span>MYSQL</span>
        </div>
        <div className='mySkills'>
            <img src={AWS} alt="" />
            <span>AWS</span>
        </div>
       
    </div> 
</div>

    </div>
  )
}
