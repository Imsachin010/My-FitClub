import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
              <div></div>
              <span>the best Fitness Club</span>
            </div>
            {/* Hero heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span>
                  We will help you to Shape & Build your Ideal Body 
                </span>
              </div>
            </div>
            {/* Experience figures */}
            <div className='figures'>
              <div>
                <span>10+</span>
                <span>expert Coaches</span>
              </div>
              <div>
                <span>150+</span>
                <span>Daily gym members </span>
              </div>
              <div>
                <span>50+</span>
                <span>fitness Program</span>
              </div>
            </div>
            {/* Hero buttons */}
            <div className="hero-buttons">
              <buttons className="btn">Get started</buttons>
              <buttons className="btn">Read More</buttons>
            </div>
        </div>
        {/* Right side */}
        <div className='right-h'>
          <button className='btn'>Join Now</button>

          <div className="heart-rate">
            <img src="Heart" alt="" />
            <span>Heart Rate</span>
            <span>166 bpm</span>
          </div>
        </div>
    </div>
  )
}

export default Hero
