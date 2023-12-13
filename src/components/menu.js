import * as React from 'react'
import PathP from '../../static/bg-sidebar-desktop.svg'
import '../styles/menu.css'
import '../styles/menuShapes.css'
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
  
  return (
    <div className="menu-outer">
      <PathP className="menu-bg" />
      <div className="menu-inner">
        <div className="menu-container">
          <ul className="menu-list">
            <div className="menu-item-container">
              {
                menuText.map((item) => {
                  return (
                    <div key={item.step} className="menu-item-shell">
                      <li id={item.step.toLocaleLowerCase()} className="menu-item" >
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