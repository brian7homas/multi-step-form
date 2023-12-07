import * as React from 'react'
import PathP from '../../static/bg-sidebar-desktop.svg'

// List data
const menuText = [
  {
    number: 1,
    step: 'STEP 1',
    text: 'YOUR INFO',
    tlName: 'step-1'
  },
  {
    number: 2,
    step: 'STEP 2',
    text: 'SELECT PLAN',
    tlName: 'step-2'
  },
  {
    number: 3,
    step: 'STEP 3',
    text: 'ADD-ONS',
    tlName: 'step-3'
  },
  {
    number: 4,
    step: 'STEP 4',
    text: 'SUMMARY',
    tlName: 'step-4'
  }
]
function Menu({ tl, label }) {
  function setActive(index){
    let sel = document.querySelectorAll(".menu-item-style")
    let num = document.querySelectorAll(".menu-item-style__number")
    
    sel.forEach((el) => el.classList.remove('menu-item-style__active'))
    num.forEach((el) => el.classList.remove('menu-item-style__number_active'))
    
    if(tl.currentLabel() == 'step1' || tl.currentLabel() == 'step1-direct'){
      sel[index].setAttribute("class", "menu-item-style menu-item-style__active")
      num[index].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
    }
    if(tl.currentLabel() == 'step2' || tl.currentLabel() == 'step2-direct'){
      sel[index].setAttribute("class", "menu-item-style menu-item-style__active")
      num[index].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
    }
    if(tl.currentLabel() == 'step3' || tl.currentLabel() == 'step3-direct'){
      sel[index].setAttribute("class", "menu-item-style menu-item-style__active")
      num[index].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
    }
    if(tl.currentLabel() == 'step4' || tl.currentLabel() == 'step4-direct'){
      sel[index].setAttribute("class", "menu-item-style menu-item-style__active")
      num[index].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
    }
  }
  return (
    <div className="menu-outer">
      <PathP className="menu-bg" />
      <div className="menu-inner">
        <div className="menu-container">
          <ul className="menu-list">
            <div className="menu-item-container">
              {
                menuText.map((item, index) => {
                  return (
                    <div className="menu-item-shell">
                      <li className="menu-item" onClick={() => {
                          tl
                          .timeScale(2)
                          .tweenTo(`step${index+1}-direct`, {ease: "in.strong"})
                          setActive(index)
                        }}>
                        <div className={`menu-item-style ${item.tlName}`} ></div>
                        <span className="menu-item-style__number">{item.number}</span>
                        <small>{item.step}</small>
                        <p className="menu-item-text">{item.text}</p>
                      </li>
                    </div>
                  )
                })
              }
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu