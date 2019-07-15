
import React from 'react'

import Like from './components/Like';

import './App.scss'

const App = () => {

  return (
    <div className="App">
      <h1>React Classes</h1>
      <Like color={ { liked:'red', unliked:'grey' } } />
    </div>
  )
}

export default App