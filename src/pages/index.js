import gsap from 'gsap/gsap-core'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import Form from "../components/form"
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
  useEffect(() => {
    let next_btn = document.querySelector(".form-submit" )
    let menu_btn = document.querySelectorAll(".menu-item")
    let previous_btn = document.querySelector(".form-submit-reverse")
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
    previous_btn.addEventListener("click", () => tl.reverse())
    next_btn.addEventListener('click', () => tl.play())
    menu_btn.forEach((el) => {
      el.addEventListener('click', (index) => {
        let step = index.currentTarget.id
        switch (step){
          case 'step 1':
            tl
              .timeScale(2)
              .tweenTo('step1-direct')
            break;
          case 'step 2':
            tl
              .timeScale(2)
              .tweenTo('step2-direct')
            break;
          case 'step 3':
            tl
              .timeScale(2)
              .tweenTo('step3-direct')
            break;
          case 'step 4':
            tl
              .timeScale(2)
              .tweenTo('step4-direct')
            break;
        }
      })
    })
  },[])
    <div className={styles.textCenter}>
      <Form/>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
