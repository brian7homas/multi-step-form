import React, { useEffect } from 'react'
import '../styles/step4.css'
function Step4({plan, addOn}) {
  
  let total = 0
  const calculate = () => {
    if(addOn.length > 2){
      total = Number(addOn[0].plan.price) +
      Number(addOn[1].plan.price) +
      Number(plan.termUser[0].price.match(/\d+/))
    }
    if(addOn.length > 3){
      total = Number(addOn[0].plan.price) +
      Number(addOn[1].plan.price) +
      Number(addOn[2].plan.price) +
      Number(plan.termUser[0].price.match(/\d+/))
    }
    return total
  }
  useEffect(() =>{},[addOn])
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
                    {/* 
                        Plan name - left
                    */}
                    <div className="step4-tableCell__plan">
                      <p className="step4-tableCell__plan-name">{plan.name}</p>
                      <p className="step4-tableCell__plan-term">({plan.termUser[0].length})</p>
                      <span><a id="change" href="#">change</a></span>
                    </div>
                  </div>
                  <div className="step4-tableCell">&nbsp;</div>
                  {/* 
                      Plan price - right
                  */}
                  <div className="step4-tableCell step4-tableCell__end">
                    <p>{plan.termUser[0].price}</p>
                  </div>
                  <span className="step4-tableCell__border"></span>
                </div>
                <div className="step4-tableRow">
                  {/* 
                      Add-on text - left
                  */}
                  <div className="step4-tableCell step4-tableCell__light">
                    {
                      addOn[0] ? addOn.map(el => {
                        return(
                          <p key={el.plan.name}>{el.plan.name}</p>
                        )
                      } ) : <p>(No Add-ons added)</p>
                    }
                  </div>
                  <div className="step4-tableCell">&nbsp;</div>
                  
                  {/* 
                      Add-on price - right
                  */}
                  <div className="step4-tableCell step4-tableCell__end">
                    {
                      addOn[0] ? addOn.map(el => {
                        return(
                          <p key={el.plan.name + '-' + el.plan.price}>
                            +${el.plan.price}
                            {plan.termUser[0].length == 'monthly' ? '/mo' : '/yr'}
                          </p>
                        )
                      } ) : <p>$0</p>
                    }
                  </div>
                </div>
                <div className="step4-tableRow">
                  <div className="step4-tableCell">
                    {/* 
                      Total text - left
                    */}
                    <div className="step4-tableCell__total">
                      <p className="step4-tableCell__plan-name">Total</p>
                      <span>per ({plan.termUser[0].length == 'monthly' ? 'month' : 'year'})</span>
                    </div>
                  </div>
                  {/* 
                      Add-on price - right
                  */}
                  <div className="step4-tableCell">&nbsp;</div>
                  <div className="step4-tableCell step4-tableCell__end step4-tableCell__end-total ">
                    {
                      !addOn[0] 
                      ? <p>${plan.termUser[0].price.match(/\d+/)}{plan.termUser[0].length == 'monthly' ? '/mo' : '/yr'}</p> 
                      : addOn.map(() =>{
                        total = 0
                        if(addOn.length == 1){
                          total = Number(addOn[0].plan.price) +
                            Number(plan.termUser[0].price.match(/\d+/))
                        }
                        
                        if(addOn.length == 2){
                          total = Number(addOn[0].plan.price) +
                            Number(addOn[1].plan.price) +
                            Number(plan.termUser[0].price.match(/\d+/))
                        }
                        if(addOn.length == 3){
                          total = Number(addOn[0].plan.price) +
                            Number(addOn[1].plan.price) +
                            Number(addOn[2].plan.price) +
                            Number(plan.termUser[0].price.match(/\d+/))
                        }
                      })
                    }
                    {!addOn[0] ? '' : <p>${total}{plan.termUser[0].length == 'monthly' ? '/mo' : '/yr'}</p>}
                  </div>
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