import React, { useEffect } from 'react'
import '../styles/step4.css'
function Step4({plan}) {
  useEffect(() =>{},[plan])
  return(
    <div className="step4">
      <h1 className="step4-header">Finishing up</h1>
      <p className="step4-sub">Double check everything looks OK before confirming.</p>
      <section>
        <section>
          <section>
            <div className="step4-table">
              <div className="step4-tableBody">
                <div className="step4-tableRow">
                  <div className="step4-tableCell">
                    <div className="step4-tableCell__plan">
                      <p className="step4-tableCell__plan-name">{plan.name}</p>
                      <p className="step4-tableCell__plan-term">({plan.termUser[0].length})</p>
                    </div>
                  </div>
                  <div className="step4-tableCell">&nbsp;</div>
                  <div className="step4-tableCell">
                    <p>{plan.termUser[0].price}</p>
                  </div>
                </div>
                <div className="step4-tableRow">
                  <div className="step4-tableCell">
                    
                  </div>
                  <div className="step4-tableCell">&nbsp;</div>
                  <div className="step4-tableCell">&nbsp;</div>
                </div>
                <div className="step4-tableRow">
                  <div className="step4-tableCell">&nbsp;</div>
                  <div className="step4-tableCell">&nbsp;</div>
                  <div className="step4-tableCell">&nbsp;</div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
      </section>
    </div>
  )
}

export default Step4