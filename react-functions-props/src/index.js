
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const render = () => { 

  const value = Math.floor(Math.random() * 10000);   

  ReactDOM.render(
    <App 
      render={ render }
      value= { value }
      />,
    document.querySelector('#root')
  )
}

render();