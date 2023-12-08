import * as React from 'react'
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
const Step2 = () => (
          {
            Cards.map((el) =>{
              return(
                <div className="step2-tier-option">
                  <div className="step2-tier-option__inner">
                    {el.icon}
                    <h1 className="step2-tier-option__text">{el.text}</h1>
                    <p className="step2-tier-option__yearly">{el.price.yearly}</p>
                    {/* <p className="step2-tier-option__monthly">{el.price.monthly}</p> */}
                    <p className="step2-tier-option__free">2 months free</p>
                  </div>
                </div>
              )
            })
          }
)

export default Step2