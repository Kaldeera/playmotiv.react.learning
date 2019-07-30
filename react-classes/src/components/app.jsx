
import React, { Component } from 'react'

import Level1 from './level1'

import '../scss/app.scss'  

class App extends Component {

  constructor(props){

    super(props)

    this.state = { 
      ...props,
      value: Math.random()
    }

    this.change = this.change.bind(this)
  }

  change(instance) {

    console.log(instance)

    this.setState({
      value: Math.random()
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