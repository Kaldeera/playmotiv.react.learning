
import { createStore } from 'redux'
import reducers1 from '../reducers/reducers1'
import reducers2 from '../reducers/reducers2'
import initialState1 from  './initialstate1'
import initialState2 from  './initialstate2'

export const store1 = createStore(
  reducers1,
  initialState1
)

export const store2 = createStore(
  reducers2,
  initialState2
)