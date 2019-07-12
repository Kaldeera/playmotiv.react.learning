
import React from 'react'

import Level1 from './components/level1'

const App = (props) => {

  return (
    <div className="App">
      <h1>React Functions [ { props.value } ]</h1>
      <Level1 
        render={ props.render }
        value={ props.value }
        />
    </div>
  )
}

export default App