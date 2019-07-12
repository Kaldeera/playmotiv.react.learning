
import React, { useState } from 'react'

import './scss/ColorToggler.scss'

const ColorToggler = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div 
     className='colorToggler' //Importante utilizar className, no class
     onClick={ () => { setToggle(!toggle) } }
     style={ { backgroundColor: toggle ? 'hotpink' : 'aquamarine' } }
    >
      Click me
    </div>
  )
}

export default ColorToggler