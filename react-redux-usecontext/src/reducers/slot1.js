
import {
  SLOT1_CHANGE_DATA
} from '../actions/slot1'
import initialState1 from '../store/initialstate1'

const data = (state = initialState1, action) => {

  switch (action.type) {

    case SLOT1_CHANGE_DATA:

      return  {
        ...state,
        value: action.payload.value
      }
  }

  return state
}

export default data