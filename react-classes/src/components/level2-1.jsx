
import React, { Component } from 'react'

import Level3 from './level3'

class Level21 extends Component {

  constructor(props) {

    super(props)
  }  

  componentDidMount() {

    console.log('start')
  } 

  componentWillUnmount() {

    console.log('end')
  }

  render() {
    return (
      <div>
        LEVEL 21
        <Level3 
          change={ this.props.change }
          value={ this.props.value }
          instance='INSTANCE 21'
        />
      </div>
    )
  }
}

export default Level21