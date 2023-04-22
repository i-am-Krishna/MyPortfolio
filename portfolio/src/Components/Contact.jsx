import React from 'react'
import './Contact.css'
import LI from './logoL.png'
import Twitter from './twitter.png'
import insta from './newinsta.png'
import mail from './mail.png'
import phone from './phone.png'


export const Contact = () => {
  return (
    <div id='contact' className='contact'   data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
       <h2>Get in touch</h2>
       <h1>Krishna Kumar Gupta</h1>
       <div className='items'>
         <div className='inneritems'>
           <a href="https://www.linkedin.com/in/iamkrishhna/">
            <img src={LI}  />
         <h3> 
          LinkedIn
          </h3>
         </a>
         </div>
         <div className='inneritems'>
           <a href="https://twitter.com/The_Krishna1">
            <img src={Twitter}  />
         <h3>
             Twitter
           </h3>
           </a>
         </div>
         <div className='inneritems'> 
           <a href="https://www.instagram.com/i.a.m.k.r.i.s.h.n.a/">
         <img src={insta}  />
         <h3>

           Instagram
           </h3>
           </a>
         </div>
         <div className='inneritems'> 
           <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
         <img src={mail}  />
         <h3>

           E-mail
           </h3>
           </a>
         </div>
         <div className='inneritems'> 
           <a href="#">
         <img src={phone}  />
         <h3>

           Phone
           </h3>
           </a>
         </div>

           </div>
       <div className='copyright'> &#169; 2022 copyright all right reserved</div>
    </div>
  )
}
