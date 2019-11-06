
import {
  DATA_LOAD_DATA,
  dataLoadDataSuccess
} from '../actions/data'
import {
  uiMessage
} from '../actions/ui'

const data = store => next => action => {

  switch(action.type) {

    case DATA_LOAD_DATA:

      store.dispatch(uiMessage({
        type: 'warn',
        text: 'Loading data...'
      }))
      
      fetch('https://dev.playmotiv.cloud/wp-json/playmotivcloud/games')
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

          store.dispatch(dataLoadDataSuccess(data))

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