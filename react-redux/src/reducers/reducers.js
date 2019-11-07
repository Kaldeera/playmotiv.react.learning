
import { combineReducers } from 'redux'
import data from './data'
import users from './users'
import ui from './ui'

const reducers = combineReducers({
  data, 
  ui,
  users
})

export default reducers