import React from 'react'
import './Program.css'
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData.js'
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        {/* header */}

        <div className="programs-head">
            <span className='stroke-text'>explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape You</span>
        </div>

        <div className="program-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.detail}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Programs
