import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/modules/fibonacci/actions'
import store from '../../../redux/store'

const Fibonacci = ({ number, generating }) => {

  return (
    <div>
    <h1>{ `Number: ${number}`}</h1>
      <button 
        onClick={()=>store.dispatch(actions.generate(10))}
        disabled={generating}
      >
        Calculate
      </button>
    </div>
  )
}

const mapStateToProps = state => ({ 
  number: state.fibonacci.number,
  generating: state.fibonacci.generating
})

export default connect(mapStateToProps)(Fibonacci)