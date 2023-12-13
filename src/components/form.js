import React, { useEffect } from "react"
import gsap from 'gsap'
import Menu from "./menu"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import '../styles/formContainer.css'
import '../styles/form.css'
function Form({setPlan, plan, setActive, tl}) {

  useEffect(() => {}, [])
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
            />
          <Step3 plan={plan}/>
          <Step4 plan={plan}/>
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