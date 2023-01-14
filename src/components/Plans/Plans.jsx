import React from 'react'
import './Plans.css';
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
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
        {plansData.map((plan, i) => (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature" key={i}>
                    <img src={whiteTick} alt=""/>
                    <span key={i}>{feature}rn start</span>
                  </div>
                ))}
              </div>

              <div className="">
                <span>See more Benefits</span>
              </div>
              <div>
                <button className="btn">Join Now</button>
              </div>
            </div>        
        ))}
      </div>
    </div>
  )
}

export default Plans
