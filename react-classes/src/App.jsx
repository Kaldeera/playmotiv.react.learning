
import React, { Component } from 'react'

import Level1 from './components/level1'

class App extends Component {

  constructor(props){

    super(props)
  }

  render(){

    return (
      <div className="App">
        <h1>React Classes [ { this.props.value } ]</h1>
        <Level1 
          render={ this.props.render }
          value={ this.props.value }
          />
      </div>
    )
  }
}

export default App