import * as React from "react"

import formContainer from '../styles/formContainer.css'
import menu from '../styles/menu.css'
import form from '../styles/form.css'

import PathP from '../../static/bg-sidebar-desktop.svg'
const Form = () => (
  <section className="form-container-outer">

    <div className="menu-outer">
    <PathP className="menu-bg"/>
      <div className="menu-inner">
      
        <div className="menu-container">
          <ul className="menu-list">
              <li>
                <small>
                  Step 1
                </small>
                YOUR INFO
              </li>
              <li>
                <small>
                  Step 2
                </small>
                SELECT PLAN
              </li>
              <li>
                <small>
                  Step 3
                </small>
                ADD-ONS
              </li>
              <li>
                <small>
                  Step 4
                </small>
                SUMMARY
              </li>
          </ul>
        </div>
      </div>
    </div>
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