import React from 'react'
import { connect } from 'react-redux'
import * as auth from '../../redux/modules/auth/actions'

import LoginForm from './loginform'

const PrivateContent = ({ dispatch, accessToken, client }) => {

  return (
    accessToken ?
    <div>
      Bienvenido {client.data.display_name}
      <div>
        <button onClick={()=>dispatch(auth.deauthenticate())}>Cerrar Sesión</button>
      </div>
    </div>
    :
    <LoginForm />
  )
}

const mapStateToProps = state => ({ 
  accessToken: state.auth.access_token,
  client: state.auth.client
})

export default connect(mapStateToProps)(PrivateContent)