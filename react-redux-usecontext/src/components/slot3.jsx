import React, {
  useContext
} from 'react'
import Context from '../context/context'

const Slot3 = () =>  {

  const context = useContext(Context)

  return <>
    <hr/>
    <div>Valor 1: { context.value1 }</div>
    <div>Valor 2: { context.value2 }</div>
  </>
};

export default Slot3
