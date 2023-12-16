import React from "react"
import FinishIcon from '../../static/icon-thank-you.svg'
import '../styles/step5.css'
function Step5() {
  return (
    <section className="step5">
      <div className="step5-icon">
        <FinishIcon/>
      </div>
      <div className="step5-thank-you">
        <h1>Thank You!</h1>
      </div>
      <div className="step5-text">
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
      </div>
    </section>
  )
}

export default Step5