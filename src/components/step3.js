import * as React from 'react'
import AddOns from '../data/addOnData'
import '../styles/step3.css'

const Select = (e) => {
  let parent = e.currentTarget.parentNode.parentNode.parentNode
  if(!e.currentTarget.checked){
    parent.classList.remove("step3-add-on__active")
  }else{
    parent.classList.add("step3-add-on__active")
  }
  }
const Step3 = ({value}) => (
  <div className="step3">
    <h1 className="step3-header">Pick add-ons</h1>
    <p className="step3-sub">Add-ons help enhance your gaming experience.</p>
    <section>
      {
        AddOns.map((el) => {
          return(
            <div key={el.header} className="step3-add-on">
              <section className="step3-add-on__checkbox-container">
                <label className="step3-add-on__checkbox" htmlFor="">
                  <input type="checkbox" name="" id="" onClick={e => Select(e)}/>
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