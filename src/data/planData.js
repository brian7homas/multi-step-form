import React from 'react'
import Arcade from '../../static/icon-arcade.svg'
import Advanced from '../../static/icon-advanced.svg'
import Pro from '../../static/icon-pro.svg'
const planData = [
  {
    icon: <Arcade/>,
    name: 'Arcade',
    term: [
      {
        length:'monthly',
        price: '$9/mo'
      },
      // {
      //   length:'yearly',
      //   price: '$9/yr'
      // },
    ],
  },
  {
    icon: <Advanced/>,
    name: 'Advanced',
    term: [
      {
        length:'monthly',
        price: '$12/mo'
      },
      // {
      //   length:'yearly',
      //   price: '$120/yr'
      // },
    ],
  },
  {
    icon: <Pro/>,
    name: 'Pro',
    term: [
      {
        length:'monthly',
        price: '$15/mo'
      },
      // {
      //   length:'yearly',
      //   price: '$150/yr'
      // },
    ],
  }
]
export default planData