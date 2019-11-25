

import {
  UI_MESSAGE,
  UI_MESSAGE_CLEAR
} from '../actions/ui'
import initialState from '../store/initialstate'

const ui = (state = initialState, action) => {

  switch (action.type) {

    case UI_MESSAGE:

      return {
        ...state,
        message: action.payload.message
      }

    case UI_MESSAGE_CLEAR:

      return {
        ...state,
        message: {
          type: '',
          text: ''
        }
      }

    default:

      return state
  }
}

export default ui