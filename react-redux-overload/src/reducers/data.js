
import {
  DATA_LOAD_GAMES_LIST_SUCCESS,
  DATA_LOAD_GAME_SUCCESS,
  DATA_TOGGLE_VIEW_GAME_DATA
} from '../actions/data'
import initialState from '../store/initialstate'

const data = (state = initialState, action) => {

  if(action.type.indexOf('@@') != -1) return state

  let newGamesList;

  switch (action.type) {

    case DATA_LOAD_GAMES_LIST_SUCCESS:

      newGamesList = action.payload.data.Data
      .reduce((list, game) => {

        list[game.ID] = game
        list[game.ID].dataloaded = false
        list[game.ID].datavisible = false
        return list
      }, {})

      return  {
        ...state,
        list: newGamesList
      }

    case DATA_LOAD_GAME_SUCCESS:

      const GameData = action.payload.data.Data
      newGamesList = { ...state.list }
      newGamesList[GameData.ID] = GameData
      newGamesList[GameData.ID].dataloaded = true
      newGamesList[GameData.ID].datavisible = state.list[GameData.ID].datavisible

      return  {
        ...state,
        list: newGamesList
      }

    case DATA_TOGGLE_VIEW_GAME_DATA:

      newGamesList = { ...state.list  }
      newGamesList[action.payload.ID].datavisible = !newGamesList[action.payload.ID].datavisible

      return {
        ...state,
        list: newGamesList
      }

    default:

      return state
  }
}

export default data