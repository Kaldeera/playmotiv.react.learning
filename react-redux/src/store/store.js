
import { composeWithDevTools } from "redux-devtools-extension" //dev tools
import * as actionCreators from '../actions/index'; 

import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/reducers'
import data from '../middleware/data'
import ui from '../middleware/ui'
import users from '../middleware/users'
import initialState from  './initialstate'

const composeEnhancers = composeWithDevTools({ 
  actionCreators, 
  trace: true, 
  traceLimit: 25 
}); 

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(
      data,
      ui,
      users
    )
  )
)