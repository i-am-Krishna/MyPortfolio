import React from 'react'
import './Projects.css'
import Netflix from './netflix.png'
import Meanbuy from './meanbuy.png'
import Pharmeasy from './pharmeasy.png'
import DotKey from './dotandkey.png'
export const Projects = () => {
  return (
    <div className='main'>
      <h1 className='projects'>Projects</h1>
      <div className='myproject' >
        <div className='miniproject'>
          <img src={Meanbuy} alt="" />
<h1>Meanbuy.com Clone</h1>
<p className='firstpara'>Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying instantly, waiting to save or to pick up your order from the store.
</p>
<p className='teams'>A collaborative project, built in 5 days by a team of  5developers.</p>
<h4 className='stacks'>HTML | CSS | JavaScript </h4>

<div className='buttons'>
<button className='resumeBtn'><a href="https://github.com/anandrajsingh05/MeanBuyProject">Code</a></button>
<button className='resumeBtn'><a href="https://anandrajsingh05.github.io/MeanBuyProject/">Live</a></button>
</div>
        </div>


        <div className='miniproject'>
          <img src={Pharmeasy} alt="" />
<h1>PharmEasy Clone</h1>
<p className='firstpara'>PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products at a FLAT 20% OFF*.
</p>
<p className='teams'>A collaborative project, built in 5 days by a team of 5 developers.</p>
<h4 className='stacks'>HTML | CSS | JavaScript | React Js</h4>

<div className='buttons'>
<button className='resumeBtn'><a href="https://github.com/ahmadparvej/pharmeasy-clone/tree/main/app">Code</a></button>
<button className='resumeBtn'>
  <a href="https://relaxed-faloodeh-4bff55.netlify.app/">Live</a></button>
</div>
        </div>

        <div className='miniproject'>
          <img src={Netflix} alt="" />
<h1>Netflix Clone</h1>
<p className='firstpara'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
</p>
<p className='teams'>A solo project, built in 2 days by me.</p>
<h4 className='stacks'>HTML | CSS | JavaScript | React JS | Firebase</h4>

<div className='buttons'>
<button className='resumeBtn'><a href="https://github.com/i-am-Krishna/Netflix-clone">Code</a></button>
<button className='resumeBtn'><a href="https://netflix-clone-6fbe7.web.app/">Live</a></button>
</div>
        </div>

        <div className='miniproject'>
          <img src={DotKey} alt="" />
<h1>Dot & Key.com Clone</h1>
<p className='firstpara'> Beauty e-tailer Nykaa has acquired Indian skincare brand Dot & Key.  It offers premium skincare products such as serums, face masks, toners and cleansers.
</p>
<p className='teams'>A collaborative project, built in 5 days by a team of 6 developers.  </p>
<h4 className='stacks'>HTML | CSS | JavaScript | Rest API</h4>

<div className='buttons'>
<button className='resumeBtn'><a href="https://github.com/rahulraka/Dot-and-Key-Skincare">Code</a></button>
<button className='resumeBtn'><a href="https://dot-and-key.netlify.app/">Live</a></button>
</div>
        </div>



      </div>
    </div>
  )
}
