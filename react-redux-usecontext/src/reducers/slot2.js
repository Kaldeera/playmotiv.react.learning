
import {
  SLOT2_CHANGE_DATA
} from '../actions/slot2'
import initialState2 from '../store/initialstate2'

const data = (state = initialState2, action) => {

  switch (action.type) {

    case SLOT2_CHANGE_DATA:

      return  {
        ...state,
        value: action.payload.value
      }
  }

  return state
}

export default data