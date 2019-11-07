
import {
    USER_LOAD_DATA_SUCCESS
  } from '../actions/users'
  import initialState from '../store/initialstate'
  
  const users = (state = initialState, action) => {
  
    if(action.type.indexOf('@@') != -1) return state
  
    switch (action.type) {
  
      case USER_LOAD_DATA_SUCCESS:
  
        return  {
          ...state,
          users: action.payload.users.Data
        }
  
      default:
  
        return state
    }
  }
  
  export default users