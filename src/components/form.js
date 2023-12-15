import React, { useEffect } from "react"
import gsap from 'gsap'
import Menu from "./menu"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import '../styles/formContainer.css'
import '../styles/form.css'
import Step5 from "./step5"
function Form({addOn, setAddOn, setPlan, plan, tl, SetActive}) {
  useEffect(() => {
    SetActive('step-1', 'next', tl)
  }, [])
  return (
    <section className="form-container-outer">
      <Menu tl={tl} />
      <div className="form-outer">
        <div className="form-inner">
          <Step1 />
          <Step2 
            tl={tl} 
            plan={plan}
            setPlan={setPlan}
            setAddOn={setAddOn}
            />
          <Step3 
            plan={plan}
            addOn={addOn}
            setAddOn={setAddOn}
            />
          <Step4 plan={plan} addOn={addOn}/>
          <Step5 />
          <div className="form-btn-container">
            <a className="form-submit-reverse">Go Back</a>
            <button className="form-submit">Next Step</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form