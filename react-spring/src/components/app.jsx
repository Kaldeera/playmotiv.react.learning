import React from 'react'

import Transition from './examples/transition'
import Spring from './examples/spring'
import Trail from './examples/trail'

const App = () => (
  <div className="App">
    <h1>Pruebas react-spring</h1>
    <Spring />
    <Transition />
    <Trail />
  </div>
)

export default App