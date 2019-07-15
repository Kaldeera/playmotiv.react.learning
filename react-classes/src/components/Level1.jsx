
import React, { Component } from 'react'

import Level2 from './level2'

class Level1 extends Component {

  constructor(props) {

    super(props)
  }

  render() {
    return (
      <div>
        LEVEL 1
        <Level2 
          render={ this.props.render }
          value={ this.props.value }
          />
      </div>
    )
  }
}

export default Level1