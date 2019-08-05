
import React from 'react'
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement
} from 'react-html-parser'
import './App.scss'

const App = props => {

  const transform = (node, index) => { 
      
    if(
      node.attribs &&
      node.attribs.class &&
      node.attribs.class.indexOf('Level31') != -1
    ) {

      return <div key={ index } className={ node.attribs.class }>
        {
          processNodes(
            node.children,
            transform
          )
        }
      </div>
    }
  }

  const options = {
    transform: transform
  }

  return (
    <div className="App">
      <h1>REACT HTML PARSER</h1>
      {
        ReactHtmlParser(
          props.content,
          options
        )
      }
    </div>
  )
}

export default App