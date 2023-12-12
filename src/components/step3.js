import * as React from 'react'
import '../styles/step3.css'
const AddOns = [
  {
    header:'Online services',
    sub: 'Access to multiplayer games',
    price:{
      monthly: '+$1/mo',
      yearly: '+$10/yr'
    }
  },
  {
    header:'Larger storage',
    sub:'Extra 1TB of cloud save',
    price:{
      monthly: '+$2/mo',
      yearly: '+$20/yr'
    }
  },
  {
    header:'Customizable profile',
    sub: 'Custom theme on your profile',
    price:{
      monthly: '+$2/mo',
      yearly: '+$20/yr'
    }
  }
]

const Step3 = ({value}) => (
  <div className="step3">
    <h1 className="step3-header">Pick add-ons</h1>
    <p className="step3-sub">Add-ons help enhance your gaming experience.</p>
    <section>
      {
        AddOns.map((el) => {
          return(
            <div className="step3-add-on">
              <section className="step3-add-on__checkbox-container">
                <label className="step3-add-on__checkbox" htmlFor="">
                  <input type="checkbox" name="" id="" />
                  <span></span>
                </label>
                
                
              </section>
              <section className="step3-add-on__info">
                <h1 className="step3-add-on__header">{el.header}</h1>
                <p className="step3-add-on__sub">{el.sub}</p>
              </section>
              <section className="step3-add-on__price">
                <p className="step3-add-on__monthly">{el.price.monthly}</p>
                <p className="step3-add-on__yearly">{el.price.yearly}</p>
              </section>
            </div>
          )
        })
      }
    </section>
  </div>
)

export default Step3