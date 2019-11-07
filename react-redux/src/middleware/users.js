import {
    USER_LOAD_DATA,
    userLoadDataSuccess
  } from '../actions/users'
  import {
    uiMessage
  } from '../actions/ui'
  
  const data = store => next => action => {
    
    switch(action.type) {
        
      case USER_LOAD_DATA:
      console.log('middleware user_load_data');
        store.dispatch(uiMessage({
            type: 'warn',
            text: 'Loading data users...'
        }))

        fetch('https://dev.playmotiv.cloud/wp-json/playmotivcloud/users')
          .then(response => response.json())
          .then(data => { 
              
  
            if(!data.Status) { 
              
              return store.dispatch(
                uiMessage({
                  type: 'fail',
                  text: 'Server error loading users'
                })
              )
            }
  
            if(data.Status.Code == 'KO') { 
              
              return store.dispatch(
                uiMessage({
                  type: 'fail',
                  text: 'Server error loading users'
                })
              )
            }
            
            store.dispatch(
              uiMessage({
                type: 'info',
                text: data.Status.Message
              })
            )
                console.log('s');
            store.dispatch(userLoadDataSuccess(data))
  
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