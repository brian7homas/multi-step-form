import React, { useEffect } from "react"
import gsap from 'gsap'
import formContainer from '../styles/formContainer.css'
import menu from '../styles/menu.css'
import form from '../styles/form.css'
import menuShapes from '../styles/menuShapes.css'

import Menu from "./menu"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
function Form() {
  useEffect(() => {
  }, [])
  return (
    <section className="form-container-outer">
      <Menu tl={tl} />
      <div className="form-outer">
        <div className="form-inner">
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <button className="form-submit-reverse">Previous Step</button>
          <button className="form-submit">Next Step</button>
        </div>
      </div>
    </section>
  )

export default Form