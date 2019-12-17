import * as actions from './actions' 

const initialState = {
  data:{}
}

const reducers = {
  [actions.LOADED]: (state, action) => {

    return {
      data: action.payload.data
    }
  }
}

const reducer = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  state

export default reducer