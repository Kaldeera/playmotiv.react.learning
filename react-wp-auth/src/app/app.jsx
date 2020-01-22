
import React from 'react'
import store from '../redux/store'
import { Provider } from 'react-redux'

import PrivateContent from './components/privatecontent'

const App = () => { 

  return (
    <Provider store={store}>
      <PrivateContent />
    </Provider>
  )
}

export default App