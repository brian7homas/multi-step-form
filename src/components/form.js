import * as React from "react"

import formContainer from '../styles/formContainer.css'
import menu from '../styles/menu.css'
import form from '../styles/form.css'
import menuShapes from '../styles/menuShapes.css'

import Menu from "./menu"
const Form = () => (
  <section className="form-container-outer">

    <Menu/>
    <div className="form-outer">
      <div className="form-inner">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form action="#" className="form-el">
          <div>
              <label htmlFor="">Name</label>
              <input type="text" />
          </div>
          <div>
              <label htmlFor="">Email Address</label>
              <input type="text" />
          </div>
          <div>
              <label htmlFor="">Phone Number</label>
              <input type="" />
          </div>
        </form>
        <button className="form-submit">Next Step</button>
      </div>
    </div>
  </section>
)

export default Form