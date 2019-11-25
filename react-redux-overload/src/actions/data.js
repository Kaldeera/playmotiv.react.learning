
export const DATA_LOAD_GAMES_LIST = 'DATA_LOAD_GAMES_LIST'
export const dataLoadGamesList = () => ({ type: DATA_LOAD_GAMES_LIST })


export const DATA_LOAD_GAMES_LIST_SUCCESS = 'DATA_LOAD_GAMES_LIST_SUCCESS'
export const dataLoadGamesListSuccess = data => {
  
  return { 
    type: DATA_LOAD_GAMES_LIST_SUCCESS,
    payload: {
      data: data
    }
  }
}

export const DATA_LOAD_GAME = 'DATA_LOAD_GAME'
export const dataLoadGame = ID => {
  
  return { 
    type: DATA_LOAD_GAME,
    payload: {
      ID: ID
    }
  }
}

export const DATA_LOAD_GAME_SUCCESS = 'DATA_LOAD_GAME_SUCCESS'
export const dataLoadGameSuccess = data => {
  
  return { 
    type: DATA_LOAD_GAME_SUCCESS,
    payload: {
      data: data
    }
  }
}

export const DATA_TOGGLE_VIEW_GAME_DATA = 'DATA_TOGGLE_VIEW_GAME_DATA'
export const dataToggleViewGameData = ID => { 
  
  return { 
    type: DATA_TOGGLE_VIEW_GAME_DATA,
    payload: {
      ID: ID
    }
  }
}

