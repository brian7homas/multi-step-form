import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import Form from "../components/form"
import SetActive from "../helpers/SetActive"
import planData from '../data/planData'

function IndexPage () {
  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: .5,
      opacity: 0,
      display: 'none'
    }
  })
  
  const [plan, setPlan] = useState(planData[0])
  const [addOn, setAddOn] = useState([])
  useEffect(() => {
    let next_btns = document.querySelectorAll(".form-submit" )    
    let menu_btn = document.querySelectorAll(".menu-item")
    let previous_btns = document.querySelectorAll(".form-submit-reverse")
    let sel = document.querySelectorAll(".menu-item-style")
    let num = document.querySelectorAll(".menu-item-style__number")
    let change = document.querySelector('#change')
    let btn = document.querySelector('.form-submit')
    tl.add("step1")
      .add("step1-direct")
      .to(".step1", { opacity: 0 }, '.14')
      .to(".step1-header", { y: '-10px', opacity: 0 }, '<')
      .to(".step1-sub", { y: '10px', opacity: 0 }, '<')
      .to([".step-1-name, .step-1-email, .step-1-phone"], { y: '-10px', opacity: 0, stagger: .03 }, '<')
      .fromTo('.form-submit-reverse', { opacity: 0, display: 'none', ease: 'sine' }, { opacity: 1, display: 'block', ease: 'sine' }, '-.025')
      .add("step2")
      .from(".step2", {
        y: '-10px', opacity: 0
      })
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
      .to(".step4", { opacity: 0 })
      .add("step5")
      .to([".form-submit", ".form-submit-reverse"], {opacity:0, display:'none', visibility:'hidden'})
      .from(".step5", { y: '-10px', opacity: 0 }, '<')
      .from(".step5-text p", { y: '2em', duration: 2 })
      .fromTo(".step5-icon svg", { y: '10em', opacity: 0, display:'none' }, { duration: 2.2, ease: 'back.out' ,y: '1.35em', opacity: 1, display: 'block'}, "<")
      .from(".step5-thank-you h1", { duration: 1.2, ease: 'back.out' ,y: '10em', opacity: 0, stagger: .15 }, '<')
      .add("step5-direct")
      .addPause()
    previous_btns.forEach((btn) => {
      btn.addEventListener("click", () => {tl.reverse(); SetActive('', 'prev', tl)})
    })
    next_btns.forEach((btn) => {
      btn.addEventListener('click', () => {tl.play(); SetActive('', 'next', tl)})
    })
    change.addEventListener('click', () => {tl.timeScale(3).tweenTo('step2-direct');SetActive('step2', '', tl)})
    menu_btn.forEach((el, i) => {
      el.addEventListener('click', (index) => {
        let step = index.currentTarget.id
        sel.forEach((el) => el.classList.remove('menu-item-style__active'))
          num.forEach((el) => el.classList.remove('menu-item-style__number_active'))
        switch (step){
          case 'step 1':
            tl
              .timeScale(3)
              .tweenTo('step1-direct')
              .then(() => btn.textContent == 'Next step' ?  true : btn.textContent = 'Next step')
            sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
            num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
            break;
          case 'step 2':
            tl
              .timeScale(3)
              .tweenTo('step2-direct')
              .then(() => btn.textContent == 'Next step' ?  true : btn.textContent = 'Next step')
            sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
            num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
            break;
          case 'step 3':
            tl
              .timeScale(3)
              .tweenTo('step3-direct')
              .then(() => btn.textContent == 'Next step' ?  true : btn.textContent = 'Next step')
            sel[2].setAttribute("class", "menu-item-style menu-item-style__active")
            num[2].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
            break;
          case 'step 4':
            tl
              .timeScale(3)
              .tweenTo('step4-direct')
              .then(() => btn.textContent = 'Confirm')
            sel[3].setAttribute("class", "menu-item-style menu-item-style__active")
            num[3].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
            break;
        }
      })
    })
  },[])
  return(
    <Layout>
    <div className={styles.textCenter}>
        <Form 
          addOn={addOn}
          setAddOn={setAddOn}
          plan={plan}
          setPlan={setPlan}
          SetActive={SetActive}
          tl={tl}
          />
    </div>
  </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
