import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import * as actions from './actions'

import { composeWithDevTools } from "redux-devtools-extension" //dev tools

const composeEnhancers = composeWithDevTools({ 
  actions, 
  trace: true, 
  traceLimit: 25 
}); 

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
