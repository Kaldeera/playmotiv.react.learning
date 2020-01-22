import * as actions from './actions' 

const initialState = {
  access_token: null,
  refresh_token: null,
  client: null,
  message: null,
  working: false
}

const reducers = {
  [actions.STARTED_WORKING]: (state, action) => {

    return {
      access_token: null,
      refresh_token: null,
      client: null,
      message: null,
      working: true
    }
  },

  [actions.AUTHENTICATED]: (state, action) => {

    return {
      access_token: action.payload.data.access_token,
      refresh_token: action.payload.data.refresh_token,
      client: action.payload.data.wp_user,
      message: null,
      working: false
    }
  },

  [actions.DEAUTHENTICATED]: (state, action) => {

    return {
      access_token: null,
      refresh_token: null,
      client: null,
      message: null,
      working: false
    }
  },
  
  [actions.FAILED]: (state, action) => {

    return {
      access_token: null,
      refresh_token: null,
      client: null,
      message: action.payload.message,
      working: false
    }
  }
}

const reducer = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  state

export default reducer