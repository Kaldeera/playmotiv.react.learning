
import React, { Component } from 'react'

import Level21 from './level2-1'
import Level22 from './level2-2'

class Level1 extends Component {

  constructor(props) {

    super(props)
  }

  render() {
    return (
      <div>
        LEVEL 1 [{ this.props.value }]
        {
          this.props.value > 0.5 ?

          <Level21 
            change={ this.props.change }
            value={ this.props.value }
            />

          :
          
          <Level22 
            change={ this.props.change }
            value={ this.props.value }
            />
        }
      </div>
    )
  }
}

export default Level1