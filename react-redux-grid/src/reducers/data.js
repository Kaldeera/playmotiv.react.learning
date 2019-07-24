
import {
  DATA_LOADED
} from '../actions/data'
import initialState from '../store/initialstate'

const data = (state = initialState, action) => {

  if(action.type.indexOf('@@') != -1) return state

  switch (action.type) {

    case DATA_LOADED:

      return  {
        ...state,
        list: action.payload.data.Data
      }

    default:

      return state
  }
}

export default data