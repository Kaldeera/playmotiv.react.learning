
import React, {
  useState
} from 'react'

import Comp from './components/comp';
import Comp2 from './components/comp2';

const App = () => {

  const [visible, setVisible] = useState(true)

  return (
    <div className="App">
      <h1>React Hooks</h1>
      {  
        visible && <Comp />
      }
      <Comp2 />
      <a href="#" onClick={ () => setVisible(!visible) }>INVERT</a>
    </div>
  )
}

export default App