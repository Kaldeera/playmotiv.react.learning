import React, {
  useContext 
} from 'react'

import globalContext from '../globalContext'

const Comp2 = () => {

  const { methods } = useContext(globalContext)

  return (
    <>
      <h2>Component 2</h2>
      <button onClick={()=>methods.comp1.randomize()}>randomize component 1</button>
    </>
  )
}

export default Comp2