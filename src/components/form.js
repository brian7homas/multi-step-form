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
  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: .5,
      opacity: 0
    }
  })

  function setActive(index = null, direction) {
    let sel = document.querySelectorAll(".menu-item-style")
    let num = document.querySelectorAll(".menu-item-style__number")

    sel.forEach((el) => el.classList.remove('menu-item-style__active'))
    num.forEach((el) => el.classList.remove('menu-item-style__number_active'))
    if (direction == 'prev') {
      if (tl.currentLabel() == 'step1' || tl.currentLabel() == 'step1-direct') {
        sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
        num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step2' || tl.currentLabel() == 'step2-direct') {
        sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
        num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step3' || tl.currentLabel() == 'step3-direct') {
        sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
        num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step4' || tl.currentLabel() == 'step4-direct') {
        sel[2].setAttribute("class", "menu-item-style menu-item-style__active")
        num[2].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }

    }
    if (direction == 'next') {
      if (index == 'step-1') {
        sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
        num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step1' || tl.currentLabel() == 'step1-direct') {
        sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
        num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step2' || tl.currentLabel() == 'step2-direct') {
        sel[2].setAttribute("class", "menu-item-style menu-item-style__active")
        num[2].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step3' || tl.currentLabel() == 'step3-direct') {
        sel[3].setAttribute("class", "menu-item-style menu-item-style__active")
        num[3].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step4' || tl.currentLabel() == 'step4-direct') {
        sel[3].setAttribute("class", "menu-item-style menu-item-style__active")
        num[3].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
    }
  }

  useEffect(() => {
    tl.add("step1")
      .add("step1-direct")
      .addPause()
      .to(".step1", { opacity: 0 })


      .add("step2")
      .from(".step2", { y: '-10px', opacity: 0 })
      .add("step2-direct")
      .addPause()
      .to(".step2", { opacity: 0 })


      .add("step3")
      .from(".step3", { y: '-10px', opacity: 0 })
      .add("step3-direct")
      .addPause()
      .to(".step3", { opacity: 0 })

      .add("step4")
      .from(".step4", { y: '-10px', opacity: 0 })
      .add("step4-direct")
      .addPause()
    let next_btn = document.querySelector(".form-submit")
    let previous_btn = document.querySelector(".form-submit-reverse")
    previous_btn.addEventListener("click", () => {
      tl.reverse()
      setActive('', 'prev')
    })
    next_btn.addEventListener("click", (el) => {
      tl.play()
      setActive('', 'next')
    })
    setActive('step-1', 'next')
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
}

export default Form