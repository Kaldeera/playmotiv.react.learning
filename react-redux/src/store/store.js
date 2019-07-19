
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/reducers'
import data from '../middleware/data'
import ui from '../middleware/ui'
import initialState from  './initialstate'

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    data,
    ui
  )
);