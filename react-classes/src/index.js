
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

const render = () => { 

  const value = Math.floor(Math.random() * 10000);   

  ReactDOM.render(
    <App value= { value } />,
    document.querySelector('#root')
  )
}

render();