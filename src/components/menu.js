import * as React from 'react'

import PathP from '../../static/bg-sidebar-desktop.svg'

// List data
const menuText = [
  {
    number: 1,
    step: 'Step 1',
    text: 'YOUR INFO'
  },
  {
    number: 2,
    step: 'Step 2',
    text: 'SELECT PLAN'
  },
  {
    number: 3,
    step: 'Step 3',
    text: 'ADD-ONS'
  },
  {
    number: 4,
    step: 'Step 4',
    text: 'SUMMARY'
  }
]
const Menu = () => (
  <div className="menu-outer">
    <PathP className="menu-bg" />
    <div className="menu-inner">
      <div className="menu-container">
        <ul className="menu-list">
          <div className="menu-item-container">
            {
              menuText.map(item => {
                return (
                  <div className="menu-item-shell">
                    <li className="menu-item">
                      <div className="menu-item-style"></div>
                      <span className="menu-item-style__number">{item.number}</span>
                      <small>{item.step}</small>
                      {item.text}
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

export default Menu