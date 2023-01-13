import React from 'react'
import './Plans.css';
import {plansData} from '../../data/plansData'
const Plans = () => {
  return (
    <div className='plans-container'>
      <div className="programs-header">
        <span>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NEW WITH US</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, 1) => (
            <div className="plan">
              {plan.icon}
              <span>[plan.name]</span>
              <span>[plan.name]</span>
            </div>        
        ))}
      </div>
    </div>
  )
}

export default Plans
