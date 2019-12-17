import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/modules/person/actions'
import store from '../../../redux/store'

const Person = ({ data }) => {

  return (
    <div>
    <h2>
      { data.picture && <img src={data.picture.thumbnail} alt=''/>}
      <span style={{marginLeft: '10px'}}>{ data.name ? `My name is ${data.name.first}` : `Please click the button`}</span>
    </h2>
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