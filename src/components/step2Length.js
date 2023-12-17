import React, { useEffect } from "react"
import TermLengthSwtich from "../helpers/TermLengthSwitch"
import planData from "../data/planData"
function Step2Length({ setPlan, plan, setAddOn }) {
  useEffect(() => { }, [plan])
  return (
    <section className="step2-length">
      <h1 className="step2-length__label">Monthly</h1>
      <div className="step2-length__toggle-container">
        <label className="step2-length__toggle">
          <input type="checkbox" className="step2-length__input" onClick={(e) => {
            let addOn = document.querySelectorAll('.step3-add-on__checkbox input')
            let addOnActive = document.querySelectorAll('.step3-add-on')
            addOn.forEach((e, i) => {
              e.checked = false
              addOnActive[i].classList.remove('step3-add-on__active')
            })
            setAddOn([])
            planData.forEach((el) => TermLengthSwtich(e, setPlan, plan))
          }} />
          <span className="step2-length__slider"></span>
        </label>
      </div>
      <h1 className="step2-length__label">Yearly</h1>
    </section>
  )
}

export default Step2Length