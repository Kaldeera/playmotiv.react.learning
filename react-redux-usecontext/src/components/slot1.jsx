import React, { 
  useContext
} from 'react'
import Context from '../context/context'
import { store1 } from '../store/store'
import { slot1ChangeData } from '../actions/slot1'

const Slot1 = props =>  {

  const context = useContext(Context)
  context.setValue1(props.value)

  const changeValue = event => {

    store1.dispatch(slot1ChangeData(
      `Accion cambiada desde SLOT1 ${ Math.floor(Math.random() * 999) }`
    ))
  }

  return <>
    <hr/>
    <div>Mi value: { props.value }</div>
    <div 
      onClick={ changeValue }
      style={{ cursor: 'pointer' }}>CHANGE 1</div>
  </>
}

export default Slot1
