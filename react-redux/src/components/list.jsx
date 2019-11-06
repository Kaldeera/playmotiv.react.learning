import React from 'react'
import { connect } from 'react-redux';

const Component = props =>  {

  return <div className="List">
    {
      props.list
      .map((item, index) => <div 
        key={ index }
        className="Item">
        {
          item.post_title
        }
      </div>)
    }
  </div>
};

const mapStateToProps = state => ({ list: state.data.list })
const List = connect(mapStateToProps)(Component)

export default List
