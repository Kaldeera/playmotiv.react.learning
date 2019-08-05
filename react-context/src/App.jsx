
import React, {
  useState
} from 'react'

import Comp1 from './components/Comp1'
import globalContext from './globalContext'
import Comp2 from './components/Comp2';

const App = () => {

  const [methods, setMethods] = useState({})

  return (
    <div className="App">
      <globalContext.Provider value={{
          methods,
          setMethods
        }}>
        <h1>React Context</h1>
        <Comp1 />
        <Comp2 />
      </globalContext.Provider>
    </div>
  )
}

export default App