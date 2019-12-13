import * as actions from './actions' 

const initialState = {
  number: 0,
  generating: false
}

const reducers = {
  [actions.NUMBER_GENERATED]: (state, action) => {

    return {
      ...state,
      number: action.payload.number
    }
  },

  [actions.START]: (state, action) => {

    return {
      ...state,
      generating: true
    }
  },

  [actions.DONE]: (state, action) => {

    return {
      ...state,
      generating: false
    }
  }
}

const reducer = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  state

export default reducer