
import React from 'react'
import store from '../redux/store'
import { Provider } from 'react-redux';

import Person from './components/person/person'
import Fibonacci from './components/fibonacci/fibonacci'

const App = () => { 

  return (
    <Provider store={store}>
      <Person />
      <Fibonacci />
    </Provider>
  )
}

export default App