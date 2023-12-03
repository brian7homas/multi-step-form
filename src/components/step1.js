import * as React from 'react'

const Step1 = () => (
  <div className="step1">
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
  </div>
)

export default Step1