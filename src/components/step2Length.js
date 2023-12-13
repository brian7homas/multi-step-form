import React, { useEffect } from "react"
import planData from "../data/planData"
function Step2Length({ setPlan, plan }) {
  useEffect(() => { }, [plan])
  return (
    <section className="step2-length">
      <div>Monthly</div>
      <div className="step2-length__toggle-container">
        <label className="step2-length__toggle">
          <input type="checkbox" className="step2-length__input" onClick={(e) => {
            planData.forEach((el) => {
              if (e.target.checked) {
                switch (plan.name) {
                  case 'Arcade':
                    setPlan({
                      name: plan.name,
                      term: [
                        {
                          length: 'yearly',
                          price: '$90/yr'
                        },
                      ],
                    })
                    break
                  case 'Advanced':
                    setPlan({
                      name: plan.name,
                      term: [
                        {
                          length: 'yearly',
                          price: '$120/yr'
                        },
                      ],
                    })
                    break
                  case 'Pro':
                    setPlan({
                      name: plan.name,
                      term: [
                        {
                          length: 'yearly',
                          price: '$150/yr'
                        },
                      ],
                    })
                    break
                }
              } else {
                switch (plan.name) {
                  case 'Arcade':
                    setPlan({
                      name: plan.name,
                      term: [
                        {
                          length: 'monthly',
                          price: '$9/mo'
                        },
                      ],
                    })
                    break
                  case 'Advanced':
                    setPlan({
                      name: plan.name,
                      term: [
                        {
                          length: 'monthly',
                          price: '$12/mo'
                        },
                      ],
                    })
                    break
                  case 'Pro':
                    setPlan({
                      name: plan.name,
                      term: [
                        {
                          length: 'monthly',
                          price: '$15/mo'
                        },
                      ],
                    })
                    break
                }
              }
            })
          }} />
          <span className="step2-length__slider"></span>
        </label>
      </div>
      <div>Yearly</div>
    </section>
  )
}

export default Step2Length