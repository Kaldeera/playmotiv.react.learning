
import React from 'react'

import Level3 from './level3'

const Level2 = (props) => {

  return (
    <div>
      LEVEL 2
      <Level3 
        render={ props.render }
        value={ props.value }
         />
    </div>
  )
}

export default Level2