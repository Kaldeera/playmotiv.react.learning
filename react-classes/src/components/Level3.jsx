
import React, { Component } from 'react'

class Level3 extends Component {

  constructor(props) {

    super(props)
  }

  render() {
    return (
      <div>
        LEVEL 3 
        <a 
          href="#" 
          onClick={ () => this.props.change(this.props.instance) }>
          - CHANGE
          - { this.props.instance }
        </a>
      </div>
    )
  }
}

export default Level3