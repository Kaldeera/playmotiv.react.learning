
import React from 'react'

const Level3 = (props) => {

  return (
    <div>
      LEVEL 3 [{ props.value }] 
      <a href="#" onClick={ props.render }>CHANGE</a> |
      <a href="#" onClick={ () => props.clog(props.texto) }>LOG</a>
    </div>
  )
}

export default Level3