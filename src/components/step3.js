import * as React from 'react'
import AddOns from '../data/addOnData'
import '../styles/step3.css'

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
                    <input type="checkbox" name="" id="" onClick={e => SelectAddOn(e, setAddOn, addOn)}/>

export default Step3