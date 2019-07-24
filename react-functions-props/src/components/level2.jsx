
import React from 'react'

import Level3 from './level3'

const Level2 = (props) => {

  const clog = text => console.log(text || 'no text')
  
  return (
    <div>
      LEVEL 2 [{ props.value }] 
      <Level3 
        render={ props.render }
        value={ props.value }
        clog={ clog }
        texto="un texto en props"
         />
    </div>
  )
}

export default Level2