export const STARTED_WORKING = 'auth/STARTED_WORKING'
export const FAILED = 'auth/FAILED'
export const AUTHENTICATED = 'auth/AUTHENTICATED'
export const DEAUTHENTICATED = 'auth/DEAUTHENTICATED'

/* Public */
export const authenticate = (user, password) => {

  return dispatch => {

    dispatch(startedWorking())

    fetch(
      'https://dev1.playmotiv.cloud/wp-json/api-bearer-auth/v1/login', 
      {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          username: user,
          password: password
        })
      }
    )
    .then(res => res.json())
    .then(data => {

      if(!data.access_token) throw data.message //was the response an error?

      dispatch(authenticated(data))
    })
    .catch(err => dispatch(failed(err)))
  }
}

export const deauthenticate = () => ({ type: DEAUTHENTICATED })


/* Private */
const startedWorking = () => ({ type: STARTED_WORKING })

const authenticated = data => {
  
  return {
    type: AUTHENTICATED,
    payload: {
      data
    }
  }
}

const failed = message => {
  
  return {
    type: FAILED,
    payload: {
      message
    }
  }
}

