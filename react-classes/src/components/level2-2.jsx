
import React, { Component } from 'react'

import Level3 from './level3'

class Level22 extends Component {

  constructor(props) {

    super(props)

    this.state = {
      slot: 'Valor'
    }

    setInterval(() => {

      this.setState({
        slot: Math.random()
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        LEVEL 22 { this.state.slot } 
        <Level3 
          change={ this.props.change }
          value={ this.props.value }
          instance='INSTANCE 22'
        />        
      </div>
    )
  }
}

export default Level22