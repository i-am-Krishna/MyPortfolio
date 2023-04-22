import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll' 
export const Navbar = () => {
  return (
    <div className='parent'>
        <div className='first-child'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVI-bsDen9SmJ-rWlb2z9jKzen33iWAELpmQ&usqp=CAU" alt="kkg" />
        </div>
        <div className='second-child'>
            
            <div>

            
            <Link activeClass="active" to="home" className='links' spy={true} smooth={true} offset={50} duration={500} >
              Home
            </Link>
            </div>
            
            <div>

            <Link activeClass="active" to="about" className='links' spy={true} smooth={true} offset={50} duration={500} >
              About
            </Link>
            </div>
            <div>

            <Link activeClass="active" to="skills"  className='links' spy={true} smooth={true} offset={50} duration={500} >
            Skills
            </Link>
            </div>
            <div>

            <Link activeClass="active" to="projects" className='links' spy={true} smooth={true} offset={50} duration={500} >
              Projects
            </Link>
            </div>
            <div>

            <Link activeClass="active" to="contact" className='links' spy={true} smooth={true} offset={50} duration={500} >
              Contact
            </Link>
            </div>


            
            {/* <div><a href="">About</a></div> */} 
        </div>
    </div>
  )
}
