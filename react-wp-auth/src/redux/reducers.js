import { combineReducers } from 'redux'

import auth from './modules/auth/reducer'

const reducers = combineReducers({
  auth
})

export default reducers