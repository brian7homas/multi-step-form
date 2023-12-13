import React, { useEffect, useCallback } from 'react'
import gsap from 'gsap/gsap-core'
import Step2Length from './step2Length'
import Arcade from '../../static/icon-arcade.svg'
import Advanced from '../../static/icon-advanced.svg'
import Pro from '../../static/icon-pro.svg'
import '../styles/step2.css'
const Cards = [
  {
    icon:<Arcade/>,
    text:'Arcade',
    price:{
      monthly: '$9/mo',
      yearly: '$90/yr'
    }
  },
  {
    icon:<Advanced/>,
    text:'Advanced',
    price:{
      monthly: '$12/mo',
      yearly: '$120/yr'
    }
  },
  {
    icon:<Pro/>,
    text:'Pro',
    price:{
      monthly: '$15/mo',
      yearly: '$150/yr'
    }
  }
]
function Step2({planSelect, termToggle}){
  useEffect(() => {
    
  }, [])
  return(
    <section className="step2">
    <h1 className="step2-header">Select your plan</h1>
    <p className="step2-sub">You have the option of monthly or yearly billing.</p>
    <section className="step2-main">
      <section className="step2-tier">
          {
                  onClick={(e) => PlanSelect(e, setPlan, plan)}>
                  <div className="step2-tier-option__inner">
                    {el.icon}
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