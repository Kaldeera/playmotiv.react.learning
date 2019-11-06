
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

import './scss/main.scss'

import APP from './components/app'

document.addEventListener(
  'DOMContentLoaded',
  (event) => {   
    
    ReactDOM.render(
      <Provider store={ store }>        
        <APP />
      </Provider>,
      document.getElementById('APP')
    )
  }
)
