
import {
  UI_MESSAGE,
  uiMessageClear
} from '../actions/ui'

let timer

const ui = store => next => action => {

  switch(action.type) {

    case UI_MESSAGE:

      if(timer) { clearTimeout(timer) }

      timer = setTimeout(() => {
        
        return store.dispatch(uiMessageClear())
      }, 3000)

      break
  }
}

export default ui