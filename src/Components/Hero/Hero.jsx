import React from 'react'
import'./Hero.css'
import hii from '../../assets/hii.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={hii} alt="" />
      <h1><samp>I'm Logeshwaran,</samp> frontend developer & flutter developer based in India</h1>
      <p>I am a frontend developer and flutter developer from Tamil Nadu, India with 3 months of internship with certificate in Senchola Technology Solution company.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">Download cv</div>
      </div>
    </div>
  )
}

export default Hero


{/* <AnchorLink className='anchor-link' offset={50} href='#contact'> */}