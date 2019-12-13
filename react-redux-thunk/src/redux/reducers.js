import { combineReducers } from 'redux';

import person from './modules/person/reducer'
import fibonacci from './modules/fibonacci/reducer'

const reducers = combineReducers({
  person,
  fibonacci
});

export default reducers;