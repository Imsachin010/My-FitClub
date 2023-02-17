import React from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
export const Testimonial = () => {
    const [selected, setSelected] = useState(0)
    const tlength = testimonialsData.length
  return (
    <div className='Testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>Say About Us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
              <span style={(color: "var(--orange)")}>
                {testimonialsData[selected].name}
              </span>{" "}
              - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="left-r"></div>
    </div>
  )
}
