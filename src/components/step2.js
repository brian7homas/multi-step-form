import React, { useEffect, useCallback } from 'react'
import gsap from 'gsap/gsap-core'
import Step2Length from './step2Length'
import PlanSelect from '../helpers/PlanSelect'
import planData from '../data/planData'
import '../styles/step2.css'

function Step2({ setPlan, plan }) {
  useEffect(() => {}, [plan])
  return (
    <section className="step2">
      <h1 className="step2-header">Select your plan</h1>
      <p className="step2-sub">You have the option of monthly or yearly billing.</p>
      <section className="step2-main">
        <section className="step2-tier">
          {
            planData.map((el) => {
              return (
                <div 
                  key={el.name} 
                  className={`step2-tier-option ${el.name.toLocaleLowerCase()} ${el.name == plan.name ? "step2-tier-option__active" : ""}`} 
                  onClick={(e) => PlanSelect(e, setPlan, plan)}>
                  <div className="step2-tier-option__inner">
                    {el.icon}
                    <h1 className="step2-tier-option__text">{el.name}</h1>
                    <p className="step2-tier-option__monthly">{plan.term[0].length}</p>
                    <p className="step2-tier-option__monthly">{plan.term[0].price}</p>
                    <p className="step2-tier-option__free">2 months free</p>
                  </div>
                </div>
              )
            })
          }
        </section>
        <Step2Length setPlan={setPlan} plan={plan} />
      </section>
    </section>
  )
}

export default Step2