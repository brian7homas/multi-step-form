import * as React from 'react'
import '../styles/step1.css'

const Step1 = () => (
  <div className="step1 step1-container">
    <h1 className="step1-header">Personal Info</h1>
    <p className="step1-sub">Please provide your name, email address, and phone number.</p>
    <form action="#" className="step1-form">
      <div className="step1-form__cell">
        <label htmlFor="" className="step1-label">Name</label >
        <input type="text" className="step1-input"/>
      </div>
      <div className="step1-form__cell">
        <label htmlFor="" className="step1-label">Email Address</label>
        <input type="text" className="step1-input"/>
      </div>
      <div className="step1-form__cell">
        <label htmlFor="" className="step1-label">Phone Number</label>
        <input type="" className="step1-input"/>
      </div>
    </form>
  </div>
)

export default Step1