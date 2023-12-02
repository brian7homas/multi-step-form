import * as React from "react"

import form from '../styles/form.css'

const Form = () => (
  <section className="form-outer">
    <div>
      menu-outer
      <div>
        menu-inner
        <div>
          menu-container
          <ul>
            menu-list
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
    <div>
      form-outer
      <div>
        form-inner
        <p>Please provide your name, email address, and phone number.</p>
        <form action="#">
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
      </div>
    </div>
  </section>
)

export default Form