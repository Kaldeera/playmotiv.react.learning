import React, { 
  Component
} from 'react'
import Tree from './tree'

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      flatData: []
    }

    this.flatData = this.flatData.bind(this)
  }

  flatData(flatData) {

    this.setState({
      flatData: flatData
    })
  }

  render() {

    return (
      <div className="App">
        <div className="TreeWrapper">          
          <Tree flatData={ this.flatData }/>
        </div>
        <div className="FlatData">
          <pre>
            { 
              JSON.stringify(
                this.state.flatData,
                null,
                4
              )
            }
          </pre>
        </div>
      </div>
    )
  }
}