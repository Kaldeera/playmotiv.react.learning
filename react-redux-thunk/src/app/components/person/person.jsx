import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/modules/person/actions'
import store from '../../../redux/store'

const Person = ({ data }) => {

  return (
    <div>
    <h1>{ data.name ? `My name is ${data.name.first}` : `Please click the button`}</h1>
      <button 
        onClick={()=>store.dispatch(actions.loadPerson())}
      >
        Load Person
      </button>
    </div>
  )
}

const mapStateToProps = state => ({ 
  data: state.person.data
})

export default connect(mapStateToProps)(Person)