import React from 'react'
import { connect } from 'react-redux';
import Game from './game'

const Component = props =>  {

  return <div className="List">
    {
      Object.keys(props.list)
      .map((key, index) => <Game 
        key={ key }
        index={ index }
        { ...props.list[key] }
      />)
    }
  </div>
};

const mapStateToProps = state => ({ list: state.data.list })
const List = connect(mapStateToProps)(Component)

export default List
