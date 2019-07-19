
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { store } from './store/store';

import './scss/main.scss'

import Root from './components/root'

document.addEventListener(
  'DOMContentLoaded',
  (event) => {   
    
    ReactDOM.render(
      <Provider store={ store }>        
        <Root />
      </Provider>,
      document.getElementById("root")
    )
  }
)
