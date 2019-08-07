
import React, { 
  useState
} from 'react'
import { connect } from 'react-redux'
import {
  store1,
  store2
} from '../store/store'
import { Provider } from 'react-redux';
import Context from '../context/context'

import Slot1Component from './slot1'
import Slot2Component from './slot2'
import Slot3 from './slot3'

const slot1MapStateToProps = state => ({ value: state.slot1.value })
const Slot1 = connect(slot1MapStateToProps)(Slot1Component)

const slot2MapStateToProps = state => ({ value: state.slot2.value })
const Slot2 = connect(slot2MapStateToProps)(Slot2Component)

const Root = () => {

  const [value1, setValue1] = useState('INICIO 1')
  const [value2, setValue2] = useState('INICIO 2')

  return <Context.Provider value={{
    value1: value1,
    setValue1: setValue1,
    value2: value2,
    setValue2: setValue2,
  }}>
    <Provider store={ store1 }>        
      <Slot1 />
    </Provider>
    <Provider store={ store2 }>        
      <Slot2 />
    </Provider>
    <Slot3 /> 
  </Context.Provider>
}

/*
setInterval(() => {

  store.dispatch(slot1ChangeData('Otro valor de 1 ' + Math.random()))
  store.dispatch(slot2ChangeData('Otro valor de 2 ' + Math.random()))
}, 2000)
*/

export default Root 