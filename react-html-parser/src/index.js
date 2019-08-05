
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const rootElement = document.querySelector('#root')
const content = rootElement.outerHTML

ReactDOM.render(
  <App content={ content } />,
  document.querySelector('#root')
)