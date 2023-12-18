import React, { useEffect } from 'react'
import AddOns from '../data/addOnData'
import '../styles/step3.css'
import '../media-queries/step3.css'

function Step3 ({addOn, setAddOn, plan}) {
  let addOnArray = addOn.slice()
  const SelectAddOn = (e, setAddOn, addOn) => {
    const dollarRegex = /\+\$[0-9]+/
    let parent = e.currentTarget.parentNode.parentNode.parentNode
    let addOnName = parent.innerText.split('\n').slice(0, 2).join(' ')
    let addOnPrice = parent.innerText.match(dollarRegex)
    if (!e.currentTarget.checked) {
      parent.classList.remove("step3-add-on__active")
      const result = addOnArray.filter(function (x) {
        return x.plan.name !== addOnName && x.plan.price !== addOn[1][0]
      });
      addOnArray = result
      return setAddOn(addOnArray)
    }
    if (e.currentTarget.checked) {
      let obj = {}
      obj['plan'] = { name: '', price: 0 }
      obj.plan.name = addOnName
      obj.plan.price = plan.termUser[0].length == 'monthly' ? addOnPrice[0].match(/[0-9]/)[0] : addOnPrice[0].match(/[0-9][0-9]/)[0]
      parent.classList.add("step3-add-on__active")
      addOnArray.push(obj)
      return setAddOn(addOnArray)
    }
    }
  useEffect(() => {}, [])
  return(
    <div className="step3">
      <h1 className="step3-header">Pick add-ons</h1>
      <p className="step3-sub">Add-ons help enhance your gaming experience.</p>
      <div>
        {
          AddOns.map((el, i) => {
            return(
              <div key={el.header} className="step3-add-on">
                <div className="step3-add-on__checkbox-container">
                  <label className="step3-add-on__checkbox" htmlFor={el.header.replace(' ', '-').toLowerCase()}>
                    <input type="checkbox" name={el.header.replace(' ', '-').toLowerCase()} id={el.header.replace(' ', '-').toLowerCase()} onClick={e => SelectAddOn(e, setAddOn, addOn)}/>
                    <span></span>
                  </label>
                </div>
                <div className="step3-add-on__info">
                  <h2 className="step3-add-on__header">{el.header}</h2>
                  <p className="step3-add-on__sub">{el.sub}</p>
                </div>
                <div className="step3-add-on__price">
                  <p className="step3-add-on__monthly">{plan.termUser[0].length == 'monthly' ? el.price.monthly : el.price.yearly}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default Step3