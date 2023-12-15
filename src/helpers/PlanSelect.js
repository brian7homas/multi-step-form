import planData from "../data/planData"

const PlanSelect = (e, setPlan, setAddOn) => {
  let plans = document.querySelectorAll('.step2-tier-option')
  if(e){
    let selection = e.currentTarget.innerText.trim()
    let select = selection.split('\n')[0].toLowerCase()
    let checkbox = document.querySelector('.step2-length__input')
    let addOn = document.querySelectorAll('.step3-add-on__checkbox input')
    let addOnActive = document.querySelectorAll('.step3-add-on')
    
    plans.forEach((el, i) => {
      el.classList.remove('step2-tier-option__active')
      if(select == planData[i].name.toLowerCase()){
        checkbox.checked = false
        addOn.forEach((e, i) => {
          e.checked = false
          addOnActive[i].classList.remove('step3-add-on__active')
        })
        setAddOn([])
        setPlan(planData[i])
      }
    })
    return e.currentTarget.classList.add('step2-tier-option__active')
  }
}

export default PlanSelect