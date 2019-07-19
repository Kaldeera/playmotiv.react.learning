
import React, { useEffect} from 'react'
import { connect } from 'react-redux'

const ListComponent = (props) => {

  return <div className="List">
    { 
      props.list
      .map((item, index)=> {
        
        return <div className="Item" key={ index }>{ item.user_email }</div>
      })
    }
  </div>
}
const listMapStateToProps = state => ({ list: state.data.list })
const List = connect(listMapStateToProps)(ListComponent)

export default List