import React, { 
  useContext
} from 'react'
import Context from '../context/context'
import { store2 } from '../store/store'
import { slot2ChangeData } from '../actions/slot2'

const Slot2 = props =>  {

  const context = useContext(Context)
  context.setValue2(props.value)

  const changeValue = event => {

    store2.dispatch(slot2ChangeData(
      `Accion cambiada desde SLOT2 ${ Math.floor(Math.random() * 999) }`
    ))
  }

  return <>
    <hr/>
    <div>Mi value: { props.value }</div>
    <div 
      onClick={ changeValue }
      style={{ cursor: 'pointer' }}>CHANGE 2</div>
  </>
};

export default Slot2
