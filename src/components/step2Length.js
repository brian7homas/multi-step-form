import React from "react"

function Step2Length({tl, termToggle}) {
  return (
    <section className="step2-length">
      <div>Monthly</div>
      <div className="step2-length__toggle-container">
        <label className="step2-length__toggle">
          <input type="checkbox" className="step2-length__input" onClick={(e) => termToggle(e)} />
          <span className="step2-length__slider"></span>
        </label>
      </div>
      <div>Yearly</div>
    </section>
  )
}

export default Step2Length