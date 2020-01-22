import React from 'react'
import { connect } from 'react-redux'
import * as auth from '../../redux/modules/auth/actions'

const LoginForm = ({dispatch, message, working}) => { 

  const handleSubmit = event => {
    
    event.preventDefault()
    dispatch(auth.authenticate(event.target.user.value, event.target.password.value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div dangerouslySetInnerHTML={{__html: message}} />
      <input type='text' name='user' placeholder='Usuario'/>
      <input type='password' name='password' placeholder='Contraseña'/>
      <button disabled={working}>Iniciar Sesión</button>
    </form>
  )
}

const mapStateToProps = state => ({ 
  message: state.auth.message,
  working: state.auth.working
})

export default connect(mapStateToProps)(LoginForm)