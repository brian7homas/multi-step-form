import * as React from 'react'

import PathP from '../../static/bg-sidebar-desktop.svg'
const Menu = () => (
  <div className="menu-outer">
  <PathP className="menu-bg"/>
    <div className="menu-inner">
    
      <div className="menu-container">
        <ul className="menu-list">
            <li>
              <small>
                Step 1
              </small>
              YOUR INFO
            </li>
            <li>
              <small>
                Step 2
              </small>
              SELECT PLAN
            </li>
            <li>
              <small>
                Step 3
              </small>
              ADD-ONS
            </li>
            <li>
              <small>
                Step 4
              </small>
              SUMMARY
            </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Menu