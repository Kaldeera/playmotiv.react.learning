
import {
  DATA_LOAD_GAMES_LIST,
  dataLoadGamesListSuccess,
  DATA_LOAD_GAME,
  dataLoadGameSuccess
} from '../actions/data'
import {
  uiMessage
} from '../actions/ui'

const data = store => next => action => {

  switch(action.type) {

    case DATA_LOAD_GAMES_LIST:

      store.dispatch(uiMessage({
        type: 'warn',
        text: 'Loading data...'
      }))
      
      fetch('https://ferrerocontigo.es/wp-json/playmotivcloud/games')
        .then(response => response.json())
        .then(data => { 

          if(!data.Status) { 
            
            return store.dispatch(
              uiMessage({
                type: 'fail',
                text: 'Server error'
              })
            )
          }

          if(data.Status.Code == 'KO') { 
            
            return store.dispatch(
              uiMessage({
                type: 'fail',
                text: 'Server error'
              })
            )
          }

          store.dispatch(
            uiMessage({
              type: 'info',
              text: data.Status.Message
            })
          )

          store.dispatch(dataLoadGamesListSuccess(data))

        })
        .catch(error => {

          console.log(error)

          store.dispatch(
            uiMessage({
              type: 'fail',
              text: 'Error'
            })
          )
        });
      
      break    

    case DATA_LOAD_GAME:

      store.dispatch(uiMessage({
        type: 'warn',
        text: 'Loading game...'
      }))
      
      fetch('https://ferrerocontigo.es/wp-json/playmotivcloud/games/' + action.payload.ID)
        .then(response => response.json())
        .then(data => { 

          if(!data.Status) { 
            
            return store.dispatch(
              uiMessage({
                type: 'fail',
                text: 'Server error'
              })
            )
          }

          if(data.Status.Code == 'KO') { 
            
            return store.dispatch(
              uiMessage({
                type: 'fail',
                text: 'Server error'
              })
            )
          }

          store.dispatch(
            uiMessage({
              type: 'info',
              text: data.Status.Message
            })
          )

          store.dispatch(dataLoadGameSuccess(data))

        })
        .catch(error => {

          console.log(error)

          store.dispatch(
            uiMessage({
              type: 'fail',
              text: 'Error'
            })
          )
        });
      
      break

    default:

      next(action)

      break
  }
}

export default data