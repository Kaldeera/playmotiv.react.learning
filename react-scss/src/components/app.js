import React from 'react'
import { times } from 'lodash'
import '../scss/main.scss'

const App = () => {

  return (
    <div className="App">
      <div className="ToolBar"></div>
      <div className="SideBar"></div>
      <div className="Editor">
        <div className="Content">
          {
            times(10, index => {
              
              return <div 
                key={ index } 
                className={`
                  Box
                  Box_${ index % 2 }
                `}
              >
                <div className="Inside">
                  <span>DENTRO 1</span>
                </div>
              </div>
            })
          }
        </div>
        <div className="Footer"></div>
      </div>
    </div>
  )
}

export default App