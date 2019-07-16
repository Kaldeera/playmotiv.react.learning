
import React, { Component } from 'react'

import Level3 from './level3'

class Level2 extends Component {

  constructor(props) {

    super(props)
  }

  render() {
    return (
      <div>
        LEVEL 2
        <Level3 
          change={ this.props.change }
          value={ this.props.value }
          />
      </div>
    )
  }
}

export default Level2