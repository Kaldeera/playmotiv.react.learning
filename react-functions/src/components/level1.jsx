
import React from 'react'

import Level2 from './level2'

const Level1 = (props) => {

  return (
    <div>
      LEVEL 1
      <Level2 
        render={ props.render }
        value={ props.value }
        />
    </div>
  )
}

export default Level1