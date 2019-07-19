
import {
  LOAD_DATA,
  dataLoaded
} from '../actions/data'
import {
  uiMessage
} from '../actions/ui'

const data = store => next => action => {

  switch(action.type) {

    case LOAD_DATA:
      
      fetch('https://dev.playmotiv.cloud/wp-json/playmotivcloud/usersgroups')
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

          console.log(data);
          
          store.dispatch(
            uiMessage({
              type: 'info',
              text: data.Status.Message
            })
          )

          store.dispatch(dataLoaded(data))

        })
        .catch(function(error) {
          store.dispatch(dataLoadedError(error))
        });

      store.dispatch(uiMessage({
        type: 'warn',
        text: 'Loading data...'
      }))
      
      break
  }

  return next(action)
}

export default data