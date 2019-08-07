
import React from 'react'
import ReactDOM from 'react-dom'

import './scss/main.scss'

import Root from './components/root'

document.addEventListener(
  'DOMContentLoaded',
  (event) => {   
    
    ReactDOM.render(      
      <Root />,
      document.getElementById("root")
    )
  }
)
