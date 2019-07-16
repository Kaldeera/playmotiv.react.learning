
import React, { Component } from 'react'

import Level1 from './level1'

class App extends Component {

  constructor(props){

    super(props)

    this.state = { ...props }

    this.change = this.change.bind(this)
  }

  change() {

    this.setState({
      value: Math.floor(Math.random() * 10000)
    })
  }

  render(){

    return (
      <div className="App">
        <h1>React Classes [ { this.state.value } ]</h1>
        <Level1 
          change={ this.change }
          value={ this.state.value }
          />
      </div>
    )
  }
}

export default App